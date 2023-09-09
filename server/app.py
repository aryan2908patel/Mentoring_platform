from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators


app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb://localhost:27017/newdb'
mongo = PyMongo(app)

@app.route('/',methods=['POST'])
def home():
    return "Hello Aryan Patel"

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = mongo.db.log.find_one({'email': email})
    
    if user and check_password_hash(user['password'], password):
        # Successful login
        return jsonify({'message': 'Login successful'}), 200
    else:
        # Failed login
        return jsonify({'message': 'Login failed'}), 401
    


    
if __name__ == '__main__':
    app.run(debug=True)

from register import register
from login import login
    