from flask.cli import AppGroup
from .users import seed_users, undo_users
from .boats import seed_boats, undo_boats

# Creates a seed group to hold commands
# flask seed --help to view commands

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_boats()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_boats()


@seed_commands.command('boats')
def seed_boats_cmd():
    seed_boats()
