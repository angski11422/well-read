#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from index import app
from models import db, BookClub, Book, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        genre = ["Romance", "Young Adult", "Spicy", "Horror", "Nonfiction", "Thriller", "Fantasy"]

        # Seed code goes here!

        print("Deleting data...")
        BookClub.query.delete()
        Book.query.delete()
        User.query.delete()

        print("Creating BookClubs...")

        book_clubs = []
        for i in range(5):
            bc = BookClub (
                club_name=fake.word(),
                location='virtual',
                genre=rc(genre),
                description=fake.text(),
                meeting_day=fake.day_of_week(),
                next_meeting_date=fake.date_this_month(),
                image=fake.image_url(),
                book_id=randint(1, 5)
            )
            book_clubs.append(bc)

        db.session.add_all(book_clubs)

        print("Creating Books...")

        books=[]
        for i in range(5):
            b = Book (
                author=fake.name(),
                title=fake.word(),
                cover_image=fake.image_url(),
                subject=rc(genre)
            )
            books.append(b)

        db.session.add_all(books)

        print("Creating Users...")

        users=[]
        for i in range(5):
            u = User (
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                username=fake.user_name(),
                _password_hash=fake.password(),
                avatar=fake.image_url(),
                birthday=fake.date_of_birth()
            )
            users.append(u)

        db.session.add_all(users)

        db.session.commit()

        print("Seeding done!")
