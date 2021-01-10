from app.models import db, Boat

"""
Boat Types:
Center Console
Catamaran
Sailboat
Yacht
Sport
Racing
Waverunner
Jetski
"""


def seed_boats():
    seed_boat1 = Boat(boat_type="Center Console",
                      total_occupancy=8, total_bedrooms=0, total_bathrooms=1, length="32", address="3501 Rickenbacker Cswy", summary="Center Console 6-8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=300, latitude=25.792860, longitude=-80.6170610, owner_id=2,)


seed_boat2 = Boat(boat_type="Center Console",
                  total_occupancy=6, total_bedrooms=1, total_bathrooms=1, length="28", address="3501 Rickenbacker Cswy", summary="Center Console 6 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2500, latitude=25.799960, longitude=-80.6170610, owner_id=2,)

seed_boat3 = Boat(boat_type="Catamaran",
                  total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length="38", address="3501 Rickenbacker Cswy", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.792970, longitude=-80.6170614, owner_id=2,)

seed_boat4 = Boat(boat_type="Yacht",
                  total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length="48", address="3501 Rickenbacker Cswy", summary="Cruising Yacht 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.792990, longitude=-80.6170617, owner_id=2,)
