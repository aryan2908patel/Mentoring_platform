# from flask import Blueprint, request, jsonify
# from werkzeug.security import generate_password_hash
# from app import mongo

# # Create a blueprint for registration
# greet = Blueprint('greet', __name__)

# @greet.route('/api/register', methods=['POST'])
# def register():
#     data = request.get_json()
#     email = data.get('email')
#     password = data.get('password')

#     if mongo.db.register.find_one({'email': email}):
#         return jsonify({'message': 'User already exists'}), 400

#     hashed_password = generate_password_hash(password, method='sha256')
#     mongo.db.users.insert_one({'email': email, 'password': hashed_password})

#     return jsonify({'message': 'Registration successful'}), 201

from app import app, mongo,request, jsonify
import bcrypt


@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if the user already exists
    if mongo.db.register.find_one({'email': email}):
        return jsonify({'error': 'User already exists'}), 400

    # Hash the password before storing it
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert the user into the MongoDB collection
    mongo.db.register.insert_one({
        'username': username,
        'email': email,
        'password': hashed_password
    })

    return jsonify({'message': 'Registration successful'}), 201