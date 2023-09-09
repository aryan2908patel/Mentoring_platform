from app import app , mongo , request , jsonify
from werkzeug.security import generate_password_hash, check_password_hash


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