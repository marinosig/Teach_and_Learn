"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Lesson_Content
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def handle_hello():

    users = User.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "users": []
    }

    for user in users:
        response_body['users'].append(user.serialize())

    return jsonify(response_body), 200

@api.route('/users', methods=['POST'])
def add_user(newmember):

    # User.append(newmember)
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    password_request = body_request.get("password", None)


    new_user = User(
        email = email_request
        password = password_request
    )

    db.session.add(new_user)
    db.session.commit()
    return None, 200

@api.route('/lessons', methods=['POST', 'GET'])
def handle_lessons():

    lessons = Lesson_Content.query.all()
    response_body = {
        #"message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "lessons": []
    }

    for lesson in lessons:
        response_body['lessons'].append(lesson.serializeLessons())

    return jsonify(response_body), 200