#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource
from datetime import datetime

# Local imports
from config import *
from models import BookClub, Book, User

# Views go here!
class Signup(Resource):
    def post(self):
        req = request.get_json();

        first_name = req['first_name']
        last_name = req['last_name']
        email = req['email']
        username = req['username']
        password = req['password']
        avatar = req['avatar']
        dob = req['birthday']
        
        if username and password:
            new_user = User(username=username, first_name=first_name, last_name=last_name, email=email, avatar=avatar)
            new_user.password_hash = password
            if dob:
                new_user.birthday = (datetime.strptime(dob, '%Y-%m-%d').date())

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        return {}, 422


class Login(Resource):
    def post(self):
        req = request.get_json();

        username = req['username']
        password = req['password']

        user = User.query.filter(
            User.username == username).first()
       
        if user.authenticate(password):
            session['user_id'] = user.id
            print('user logged in')
            return user.to_dict(), 200
        return None, 401


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return None, 204


class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            if user:
                return user.to_dict()
            else:
                return None
        else:
            return {"message": "User not logged in"}, 401


class UserByID(Resource):
    def get(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to find user"}, 404
    
    def patch(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            if user == None:
                return {'error': 'User not found'}, 404
            data = request.get_json()
         
            for attr, value in data.items():
                if value:
                    if attr == "birthday":
                        new_date = (datetime.strptime(value, '%Y-%m-%d').date())
                        setattr(user, attr, new_date)
                    else:
                        setattr(user, attr, value)
                
            db.session.add(user)
            db.session.commit()
            return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to update user."}, 404
    
    def delete(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            db.session.delete(user)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to find user."}, 404
    

class BookClubsPath(Resource):
    def get(self):
        all_clubs = [club.to_dict() for club in BookClub.query.all()]
        return all_clubs, 200


class BookClubByID(Resource):
    def get(self, id):
        try:
            bookclub = BookClub.query.filter(BookClub.id == id).first()
            return bookclub.to_dict(), 200
        except Exception:
            return {"error": "Unable to find book club"}, 404


class BooksPath(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return books, 200
    

class BookByID(Resource):
    def get(self, id):
        try:
            book = Book.query.filter_by(book_id=id).first()
            return book.to_dict(), 200
        except Exception:
            return {"error": "Unable to find book"}, 404


api.add_resource(Logout, '/logout')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Signup, '/signup')

api.add_resource(UserByID, '/users/<int:id>')

api.add_resource(BookClubsPath, '/bookclubs')
api.add_resource(BookClubByID, '/bookclubs/<int:id>')

api.add_resource(BooksPath, '/books')
api.add_resource(BookByID, '/books/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
