from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, BooleanField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Boat


class CreateBoatForm(FlaskForm):
    summary = StringField('Summary', validators=[DataRequired()])
    boat_type = SelectField(
        "Type", validators=[DataRequired()], choices=[("Center Console", "Center Console"), ("Catamaran", "Catamaran"), ("Sailboat", "Sailboat"), ("Yacht", "Yacht"), ("Sport", "Sport"), ("Racing", "Racing"), ("Waverunner", "Waverunner"), ("Jetski", "Jetski"), ("Fishing", "Fishing")])
    total_occupancy = IntegerField(
        "Total Occupancy", validators=[DataRequired()])
    total_bedrooms = IntegerField(
        "Bedrooms", validators=[])
    total_bathrooms = IntegerField(
        "Bathrooms", validators=[])
    length = IntegerField("Length", validators=[DataRequired()])
    address = StringField("address", validators=[DataRequired()])
    has_tv = BooleanField("Has TV", validators=[])
    has_kitchen = BooleanField("Has kitchen", validators=[])
    has_air_con = BooleanField(
        "Has air condigitioning", validators=[])
    has_internet = BooleanField("Has internet", validators=[])
    has_heating = BooleanField("Has Heating", validators=[])
    price = IntegerField("price", validators=[DataRequired()])
    latitude = FloatField("latitude", validators=[DataRequired()])
    longitude = FloatField("longitude", validators=[DataRequired()])
