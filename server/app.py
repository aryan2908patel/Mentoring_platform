from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from auth_route import auth

app = Flask(__name__)
CORS(app)

@app.route('/',methods=['POST'])
def home():
    return "Hello Aryan Patel"

app.register_blueprint(auth)

    
if __name__ == '__main__':
    app.run(debug=True)