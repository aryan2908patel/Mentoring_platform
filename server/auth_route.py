from flask import Blueprint, request, jsonify
from pymongo import MongoClient
import bcrypt
from db_setup import users  

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    try:
        username = request.json['username']
        email = request.json['email']
        password = request.json['password']

        existing_user = users.find_one({"$or": [{"username": username}, {"email": email}]})

        if existing_user:
            if existing_user.get("username") == username:
                return jsonify({"message": "Username already exists!"}), 400
            if existing_user.get("email") == email:
                return jsonify({"message": "Email already exists!"}), 400

        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        users.insert_one({
            "username": username,
            "email": email,
            "password": hashed_pw
        })

        return jsonify({"message": "User registered!"}), 201

    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500


@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password'].encode('utf-8')
    
    user = users.find_one({"email": email})
    
    if user:
        if bcrypt.checkpw(password, user['password']):
            return jsonify({"message": "Logged in!"}), 201
        else:
            return jsonify({"message": "Unauthorized"}), 401
    else:
        return jsonify({"message": "User not found!"}), 404
