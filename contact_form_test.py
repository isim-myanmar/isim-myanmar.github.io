#!/usr/bin/env python3
"""
Contact Form Integration Test
Tests both backend API and frontend integration for iSIM Myanmar contact form
"""

import requests
import json
import sys
import time
from datetime import datetime

class ContactFormTester:
    def __init__(self, backend_url="http://localhost:8001", frontend_url="http://localhost:3000"):
        self.backend_url = backend_url
        self.frontend_url = frontend_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def log_test(self, name, success, details=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            self.failed_tests.append(f"{name}: {details}")
            print(f"❌ {name} - FAILED: {details}")
        
        if details:
            print(f"   Details: {details}")

    def test_backend_contact_api(self):
        """Test the backend contact API directly"""
        try:
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "phone": "09123456789",
                "message": "This is a test message for contact form integration",
                "language": "en"
            }
            
            response = requests.post(
                f"{self.backend_url}/api/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    self.log_test("Backend Contact API", True, f"Response: {data['message']}")
                    return True
                else:
                    self.log_test("Backend Contact API", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Backend Contact API", False, f"Status code: {response.status_code}, Response: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Backend Contact API", False, f"Exception: {str(e)}")
            return False

    def test_frontend_accessibility(self):
        """Test if frontend is accessible and serving content"""
        try:
            response = requests.get(self.frontend_url, timeout=10)
            
            if response.status_code == 200:
                content = response.text
                
                # Check for essential elements
                checks = [
                    ("HTML structure", "<!DOCTYPE html>" in content),
                    ("React root element", 'id="root"' in content),
                    ("JavaScript bundle", "/static/js/bundle.js" in content),
                    ("Page title", "iSIM Myanmar" in content),
                    ("Meta description", "eSIM" in content)
                ]
                
                all_passed = True
                for check_name, check_result in checks:
                    if check_result:
                        print(f"  ✅ {check_name}")
                    else:
                        print(f"  ❌ {check_name}")
                        all_passed = False
                
                self.log_test("Frontend Accessibility", all_passed, f"Content length: {len(content)} chars")
                return all_passed
            else:
                self.log_test("Frontend Accessibility", False, f"Status code: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Frontend Accessibility", False, f"Exception: {str(e)}")
            return False

    def test_frontend_assets(self):
        """Test if frontend assets are loading correctly"""
        try:
            # Test JavaScript bundle
            js_response = requests.get(f"{self.frontend_url}/static/js/bundle.js", timeout=10)
            js_success = js_response.status_code == 200
            
            if js_success:
                print(f"  ✅ JavaScript bundle loaded ({len(js_response.content)} bytes)")
            else:
                print(f"  ❌ JavaScript bundle failed: {js_response.status_code}")
            
            # Test CSS (if exists)
            try:
                css_response = requests.get(f"{self.frontend_url}/static/css/main.css", timeout=5)
                css_success = css_response.status_code == 200
                if css_success:
                    print(f"  ✅ CSS loaded ({len(css_response.content)} bytes)")
                else:
                    print(f"  ℹ️ CSS not found or not required (status: {css_response.status_code})")
            except:
                print("  ℹ️ CSS not found or not required")
                css_success = True  # CSS might be inline or not required
            
            self.log_test("Frontend Assets", js_success, "JavaScript bundle accessibility")
            return js_success
                
        except Exception as e:
            self.log_test("Frontend Assets", False, f"Exception: {str(e)}")
            return False

    def test_cors_configuration(self):
        """Test CORS configuration for frontend-backend communication"""
        try:
            # Test preflight request from frontend origin
            response = requests.options(
                f"{self.backend_url}/api/contact",
                headers={
                    'Origin': self.frontend_url,
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'Content-Type'
                },
                timeout=10
            )
            
            if response.status_code in [200, 204]:
                cors_headers = response.headers
                cors_checks = [
                    ("Access-Control-Allow-Origin", 'Access-Control-Allow-Origin' in cors_headers),
                    ("Access-Control-Allow-Methods", 'Access-Control-Allow-Methods' in cors_headers),
                    ("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers' in cors_headers)
                ]
                
                all_cors_passed = True
                for check_name, check_result in cors_checks:
                    if check_result:
                        print(f"  ✅ {check_name}: {cors_headers.get(check_name, 'N/A')}")
                    else:
                        print(f"  ❌ {check_name} missing")
                        all_cors_passed = False
                
                self.log_test("CORS Configuration", all_cors_passed, "Frontend-Backend communication")
                return all_cors_passed
            else:
                self.log_test("CORS Configuration", False, f"Preflight failed: {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Exception: {str(e)}")
            return False

    def test_form_validation(self):
        """Test contact form validation scenarios"""
        test_cases = [
            {
                "name": "Valid Form Data",
                "data": {
                    "name": "John Doe",
                    "email": "john.doe@example.com",
                    "phone": "09123456789",
                    "message": "I'm interested in your eSIM services.",
                    "language": "en"
                },
                "expected_success": True
            },
            {
                "name": "Missing Required Fields",
                "data": {
                    "name": "",
                    "email": "",
                    "message": "",
                    "language": "en"
                },
                "expected_success": False
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "name": "Test User",
                    "email": "invalid-email",
                    "phone": "09123456789",
                    "message": "Test message",
                    "language": "en"
                },
                "expected_success": False
            }
        ]
        
        all_validation_passed = True
        
        for test_case in test_cases:
            try:
                response = requests.post(
                    f"{self.backend_url}/api/contact",
                    json=test_case["data"],
                    headers={'Content-Type': 'application/json'},
                    timeout=10
                )
                
                if test_case["expected_success"]:
                    success = response.status_code == 200 and response.json().get("success", False)
                else:
                    success = response.status_code != 200 or not response.json().get("success", True)
                
                if success:
                    print(f"  ✅ {test_case['name']}")
                else:
                    print(f"  ❌ {test_case['name']} - Status: {response.status_code}")
                    all_validation_passed = False
                    
            except Exception as e:
                print(f"  ❌ {test_case['name']} - Exception: {str(e)}")
                all_validation_passed = False
        
        self.log_test("Form Validation", all_validation_passed, "Various validation scenarios")
        return all_validation_passed

    def run_all_tests(self):
        """Run all contact form tests"""
        print("🚀 Starting iSIM Myanmar Contact Form Integration Tests")
        print(f"📍 Backend: {self.backend_url}")
        print(f"📍 Frontend: {self.frontend_url}")
        print("=" * 70)
        
        # Run all tests
        self.test_backend_contact_api()
        self.test_frontend_accessibility()
        self.test_frontend_assets()
        self.test_cors_configuration()
        self.test_form_validation()
        
        # Print summary
        print("\n" + "=" * 70)
        print(f"📊 CONTACT FORM TEST SUMMARY")
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for failure in self.failed_tests:
                print(f"  - {failure}")
        else:
            print("\n🎉 All contact form tests passed!")
        
        return len(self.failed_tests) == 0

def main():
    tester = ContactFormTester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())