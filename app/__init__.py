import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from flask_migrate import Migrate

from .models import db, User
from .config import Config
from .seeds import seed_commands
from .api.auth_routes import auth_routes
from .api.boat_routes import boat_routes
from .api.user_routes import user_routes
from .api.reservation_routes import reservation_routes

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(boat_routes, url_prefix='/api/boats')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(reservation_routes, url_prefix='/api/reservations')
db.init_app(app)
Migrate(app, db)
app.cli.add_command(seed_commands)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


# Add React Support for Static Files
@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file("favicon.ico")
    if path == 'vacation2.png':
        return app.send_static_file("vacation2.png")
    return app.send_static_file('index.html')
