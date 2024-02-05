from app import app, db
from flask import Flask, render_template, request
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import json

with app.app_context():
    db.create_all()

app.secret_key = '122222222'



@app.route('/login', methods=['OPTIONS'])
def handle_options_login():
    response = jsonify(success=True)
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

if __name__ == '__main__':
    app.run(debug=True)


