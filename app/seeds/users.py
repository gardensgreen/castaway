from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user


def seed_users():
    demo = User(email='demo@demo.com', hashedPassword="password")
    db.session.add(demo)
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
