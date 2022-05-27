from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
#     first_name = db.Column(db.String(100), nullable=False)
#     last_name = db.Column(db.String(100), nullable=False)
#     #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
#             "first_name": self.first_name,
#             "last_name": self.last_name,
#             # do not serialize the password, its a security breach
        }

class Lesson_Content(db.Model):
    __tablename__ = 'content'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer) #ForeignKey
    title = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String (30))
    written_content = db.Column(db.String(1250), nullable=False)
    image = db.Column(db.String(50000))

class Assessment(db.Model):
    __tablename__ = 'assessment'
    id = db.Column(db.Integer, primary_key=True)
    lesson_id = db.Column(db.Integer) #ForeignKey
    question_1 = db.Column(db.String(200), nullable=False)
    question_2 = db.Column(db.String (200), nullable=False)
    question_3 = db.Column(db.String(200), nullable=False)
    question_4 = db.Column(db.String(200), nullable=False)