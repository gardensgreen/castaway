import os
from flask import Flask, render_template, request, session
from flask_app.models import db, User
from flask_app.config import Config


app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)


@app.route("/")
def index():
    return render_template('Index Works')
