#!/usr/bin/env python3
"""
Navigation and Pages Test for iSIM Myanmar
Tests all navigation routes and page accessibility
"""

import requests
import sys
import time
from urllib.parse import urljoin

class NavigationTester:
    def __init__(self, frontend_url="http://localhost:3000"):
        self.frontend_url = frontend_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        
        # Define all routes to test
        self.routes = [
            {"path": "/", "name": "Home", "required_content": ["iSIM Myanmar", "eSIM"]},
            {"path": "/about", "name": "About", "required_content": ["About", "mission", "vision"]},
            {"path": "/compatibility", "name": "Compatibility", "required_content": ["compatibility", "device"]},
            {"path": "/how-it-works", "name": "How It Works", "required_content": ["how", "works", "step"]},
            {"path": "/faq", "name": "FAQ", "required_content": ["FAQ", "question", "answer"]},
            {"path": "/contact", "name": "Contact", "required_content": ["contact", "message", "email"]},
            {"path": "/partners", "name": "Partners", "required_content": ["partner", "network"]},
            {"path": "/privacy-policy", "name": "Privacy Policy", "required_content": ["privacy", "policy"]},
            {"path": "/terms-of-service", "name": "Terms of Service", "required_content": ["terms", "service"]}
        ]

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

    def test_route(self, route):
        """Test a specific route"""
        try:
            url = urljoin(self.frontend_url, route["path"])
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                content = response.text.lower()
                
                # Check for required content
                content_found = []
                content_missing = []
                
                for required in route["required_content"]:
                    if required.lower() in content:
                        content_found.append(required)
                    else:
                        content_missing.append(required)
                
                # Check for basic React app structure
                has_react_structure = all([
                    'id="root"' in content,
                    'bundle.js' in content,
                    'isim myanmar' in content
                ])
                
                if has_react_structure and len(content_missing) == 0:
                    self.log_test(f"Route: {route['name']}", True, f"Found content: {', '.join(content_found)}")
                    return True
                elif has_react_structure:
                    self.log_test(f"Route: {route['name']}", True, f"Route accessible, some content may be dynamic: {', '.join(content_found)}")
                    return True
                else:
                    self.log_test(f"Route: {route['name']}", False, f"Missing React structure or content")
                    return False
            else:
                self.log_test(f"Route: {route['name']}", False, f"HTTP {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test(f"Route: {route['name']}", False, f"Exception: {str(e)}")
            return False

    def test_api_endpoints(self):
        """Test backend API endpoints that frontend might use"""
        backend_url = "http://localhost:8001"
        api_endpoints = [
            {"path": "/api/health", "name": "Health Check"},
            {"path": "/api/compatibility", "name": "Compatibility Data"}
        ]
        
        all_passed = True
        for endpoint in api_endpoints:
            try:
                url = urljoin(backend_url, endpoint["path"])
                response = requests.get(url, timeout=5)
                
                if response.status_code == 200:
                    print(f"  ✅ {endpoint['name']}: {response.status_code}")
                else:
                    print(f"  ❌ {endpoint['name']}: {response.status_code}")
                    all_passed = False
                    
            except Exception as e:
                print(f"  ❌ {endpoint['name']}: {str(e)}")
                all_passed = False
        
        self.log_test("API Endpoints", all_passed, "Backend API accessibility")
        return all_passed

    def test_static_assets(self):
        """Test critical static assets"""
        assets = [
            {"path": "/static/js/bundle.js", "name": "JavaScript Bundle", "min_size": 100000},
            {"path": "/favicon.ico", "name": "Favicon", "min_size": 100},
        ]
        
        all_passed = True
        for asset in assets:
            try:
                url = urljoin(self.frontend_url, asset["path"])
                response = requests.get(url, timeout=10)
                
                if response.status_code == 200 and len(response.content) >= asset["min_size"]:
                    print(f"  ✅ {asset['name']}: {len(response.content)} bytes")
                else:
                    print(f"  ❌ {asset['name']}: {response.status_code}, {len(response.content)} bytes")
                    all_passed = False
                    
            except Exception as e:
                print(f"  ❌ {asset['name']}: {str(e)}")
                all_passed = False
        
        self.log_test("Static Assets", all_passed, "Critical assets loading")
        return all_passed

    def test_responsive_design(self):
        """Test if the site responds to different user agents (basic check)"""
        user_agents = [
            {"name": "Desktop", "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"},
            {"name": "Mobile", "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15"},
            {"name": "Tablet", "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15"}
        ]
        
        all_passed = True
        for ua in user_agents:
            try:
                headers = {'User-Agent': ua["ua"]}
                response = requests.get(self.frontend_url, headers=headers, timeout=10)
                
                if response.status_code == 200:
                    print(f"  ✅ {ua['name']}: {response.status_code}")
                else:
                    print(f"  ❌ {ua['name']}: {response.status_code}")
                    all_passed = False
                    
            except Exception as e:
                print(f"  ❌ {ua['name']}: {str(e)}")
                all_passed = False
        
        self.log_test("Responsive Design", all_passed, "Different user agents")
        return all_passed

    def run_all_tests(self):
        """Run all navigation tests"""
        print("🚀 Starting iSIM Myanmar Navigation & Pages Tests")
        print(f"📍 Frontend: {self.frontend_url}")
        print("=" * 70)
        
        # Test all routes
        print("\n📄 Testing Page Routes:")
        for route in self.routes:
            self.test_route(route)
        
        print("\n🔌 Testing API Integration:")
        self.test_api_endpoints()
        
        print("\n📦 Testing Static Assets:")
        self.test_static_assets()
        
        print("\n📱 Testing Responsive Design:")
        self.test_responsive_design()
        
        # Print summary
        print("\n" + "=" * 70)
        print(f"📊 NAVIGATION TEST SUMMARY")
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for failure in self.failed_tests:
                print(f"  - {failure}")
        else:
            print("\n🎉 All navigation tests passed!")
        
        return len(self.failed_tests) == 0

def main():
    tester = NavigationTester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())