from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
import uvicorn
import hashlib
import hmac
import json
import time
import requests
from typing import List, Optional

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Wave Money Configuration
WAVE_MERCHANT_ID = 'esimmyanmarwmmerchant'
WAVE_SECRET_KEY = 'd14e9a9d303daf2b6e41e099488aca4a1faf7bc337e39b8ba94de7f8df75bb2d'
WAVE_PAYMENT_URL_PREPROD = 'https://preprodpayments.wavemoney.io:8107/payment'
WAVE_AUTHENTICATE_URL_PREPROD = 'https://preprodpayments.wavemoney.io:8107/authenticate'

class PaymentItem(BaseModel):
    name: str
    amount: float

class PaymentRequest(BaseModel):
    order_id: str
    amount: float
    merchant_reference_id: str
    frontend_result_url: str
    backend_result_url: str
    time_to_live_in_seconds: Optional[int] = 600
    payment_description: Optional[str] = 'Purchase from eSIM Myanmar'
    currency: Optional[str] = 'MMK'
    merchant_name: Optional[str] = 'eSIM Myanmar'
    items: Optional[List[PaymentItem]] = []

class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    message: str
    language: Optional[str] = 'en'

def generate_payment_hash(time_to_live_in_seconds, merchant_id, order_id, amount, backend_result_url, merchant_reference_id):
    data = f"{time_to_live_in_seconds}{merchant_id}{order_id}{amount}{backend_result_url}{merchant_reference_id}"
    return hmac.new(WAVE_SECRET_KEY.encode(), data.encode(), hashlib.sha256).hexdigest()

def generate_callback_hash(status, time_to_live_in_seconds, merchant_id, order_id, amount, backend_result_url, merchant_reference_id, initiator_msisdn, transaction_id, payment_request_id, request_time):
    data = f"{status}{time_to_live_in_seconds}{merchant_id}{order_id}{amount}{backend_result_url}{merchant_reference_id}{initiator_msisdn}{transaction_id}{payment_request_id}{request_time}"
    return hmac.new(WAVE_SECRET_KEY.encode(), data.encode(), hashlib.sha256).hexdigest()

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "iSIM Myanmar API"}

@app.post("/api/payment/initiate")
async def initiate_payment(payment_request: PaymentRequest):
    try:
        # Generate payment hash
        payment_hash = generate_payment_hash(
            payment_request.time_to_live_in_seconds,
            WAVE_MERCHANT_ID,
            payment_request.order_id,
            payment_request.amount,
            payment_request.backend_result_url,
            payment_request.merchant_reference_id
        )
        
        # Prepare request body
        items_string = json.dumps([item.dict() for item in payment_request.items])
        
        request_body = {
            "merchant_id": WAVE_MERCHANT_ID,
            "order_id": payment_request.order_id,
            "merchant_reference_id": payment_request.merchant_reference_id,
            "frontend_result_url": payment_request.frontend_result_url,
            "backend_result_url": payment_request.backend_result_url,
            "amount": payment_request.amount,
            "time_to_live_in_seconds": payment_request.time_to_live_in_seconds,
            "payment_description": payment_request.payment_description,
            "currency": payment_request.currency,
            "hash": payment_hash,
            "merchant_name": payment_request.merchant_name,
            "items": items_string
        }
        
        # Make request to Wave Money API
        response = requests.post(WAVE_PAYMENT_URL_PREPROD, json=request_body, headers={
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        
        if response.status_code == 200:
            transaction_id = response.json().get('transaction_id')
            auth_url = f"{WAVE_AUTHENTICATE_URL_PREPROD}?transaction_id={transaction_id}"
            return {
                "success": True,
                "auth_url": auth_url,
                "transaction_id": transaction_id
            }
        else:
            return {"success": False, "error": response.json()}
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/payment/callback")
async def payment_callback(request: Request):
    try:
        callback_data = await request.json()
        
        # Generate callback hash for verification
        generated_hash = generate_callback_hash(
            callback_data.get('status'),
            callback_data.get('timeToLiveInSeconds'),
            callback_data.get('merchantId'),
            callback_data.get('orderId'),
            callback_data.get('amount'),
            callback_data.get('backendResultUrl'),
            callback_data.get('merchantReferenceId'),
            callback_data.get('initiatorMsisdn'),
            callback_data.get('transactionId'),
            callback_data.get('paymentRequestId'),
            callback_data.get('requestTime')
        )
        
        # Verify hash
        if generated_hash == callback_data.get('hashValue'):
            if callback_data.get('status') == 'PAYMENT_CONFIRMED':
                # Payment successful - update your database here
                print(f"Payment confirmed for order: {callback_data.get('orderId')}")
                return {"status": "success"}
            else:
                print(f"Payment status: {callback_data.get('status')}")
                return {"status": "received"}
        else:
            raise HTTPException(status_code=400, detail="Invalid hash")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/contact")
async def submit_contact_form(contact_form: ContactForm):
    try:
        # Process contact form submission
        # You can save to database or send email here
        print(f"Contact form submitted: {contact_form.dict()}")
        return {
            "success": True,
            "message": "Thank you for your message. We will contact you soon!",
            "submitted_at": int(time.time())
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/compatibility")
async def get_compatibility_data():
    return {
        "devices": [
            {"brand": "iPhone", "models": ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"], "support": "full"},
            {"brand": "Samsung", "models": ["Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy Note 20"], "support": "full"},
            {"brand": "Google", "models": ["Pixel 4", "Pixel 5", "Pixel 6", "Pixel 7"], "support": "full"},
            {"brand": "Huawei", "models": ["P40", "P50", "Mate 40", "Mate 50"], "support": "limited"}
        ],
        "networks": ["Telenor", "Ooredoo", "MPT", "Mytel"]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)