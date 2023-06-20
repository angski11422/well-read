#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import *
from models import BookClub, Book

# Views go here!

    
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


api.add_resource(BookClubsPath, '/bookclubs')
api.add_resource(BookClubByID, '/bookclubs/<int:id>')

api.add_resource(BooksPath, '/books')
api.add_resource(BookByID, '/books/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
