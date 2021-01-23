from flask.cli import AppGroup
from .users import seed_users, undo_users
from .boats import seed_boats, undo_boats
from .media import seed_media, undo_media

# Creates a seed group to hold commands
# flask seed --help to view commands

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_boats()


@seed_commands.command('undo')
def undo():
    undo_boats()
    undo_users()


@seed_commands.command('boats')
def seed_boats_cmd():
    seed_boats()


@seed_commands.command('undo-boats')
def seed_boats_cmd():
    undo_boats()


@seed_commands.command('media')
def seed_media_cmd():
    seed_media()


@seed_commands.command('undo-media')
def seed_media_cmd():
    undo_media()
