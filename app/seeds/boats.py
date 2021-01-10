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
fishing boat
"""


def seed_boats():
    seed_boat1 = Boat(boat_type="Center Console",
                      total_occupancy=8, total_bedrooms=0, total_bathrooms=1, length="32", address="3501 Rickenbacker Cswy", summary="Center Console 6-8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=300, latitude=25.792860, longitude=-80.6170610, owner_id=2,)

    seed_boat2 = Boat(boat_type="Sport",
                      total_occupancy=6, total_bedrooms=0, total_bathrooms=0, length="20", address="3501 Rickenbacker Cswy", summary=" Seadoo 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=500, latitude=25.799960, longitude=-80.6170610, owner_id=2,)

    seed_boat3 = Boat(boat_type="Catamaran",
                      total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length="38", address="3501 Rickenbacker Cswy", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.792970, longitude=-80.6170614, owner_id=2,)

    seed_boat4 = Boat(boat_type="Yacht",
                      total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length="48", address="3501 Rickenbacker Cswy", summary="Cruising Yacht 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.792990, longitude=-80.6170617, owner_id=2,)

    seed_boat5 = Boat(boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length="95", address="3501 Rickenbacker Cswy", summary=" Yacht 8-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.792995, longitude=-80.6170627, owner_id=2,)

    seed_boat6 = Boat(boat_type="Center Console",
                      total_occupancy=6, total_bedrooms=0, total_bathrooms=1, length="24", address="801 Brickell Bay Dr", summary="Center Console 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.764760, longitude=-80.189010, owner_id=2,)

    seed_boat7 = Boat(boat_type="Center Console",
                      total_occupancy=12, total_bedrooms=1, total_bathrooms=1, length="42", address="801 Brickell Bay Dr", summary="Intrepid 10-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.764761, longitude=-80.189011, owner_id=2,)

    seed_boat8 = Boat(boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=5, total_bathrooms=4, length="95", address="801 Brickell Bay Dr", summary="Sundance Yacht 10-15 People with 1 waverunner", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2800, latitude=25.764762, longitude=-80.189001, owner_id=2,)

    seed_boat9 = Boat(boat_type="Catamaran",
                      total_occupancy=7, total_bedrooms=1, total_bathrooms=1, length="32", address="801 Brickell Bay Dr", summary="Catamaran 6-8 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=550, latitude=25.764762, longitude=-80.189020, owner_id=2,)

    seed_boat10 = Boat(boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length="30", address="801 Brickell Bay Dr", summary="Center Console 6 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2500, latitude=25.799950, latitude=25.764762, longitude=-80.189000, owner_id=2,)

    seed_boat11 = Boat(boat_type="Catamaran",
                       total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length="38", address="3400 Pan American Dr Miami", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.727022, longitude=-80.235449, owner_id=2,)

    seed_boat12 = Boat(boat_type="Yacht",
                       total_occupancy=10, total_bedrooms=1, total_bathrooms=2, length="52", address="3400 Pan American Dr Miami", summary="Cruising Yacht 8-10 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.727023, longitude=-80.235451, owner_id=2,)

    seed_boat13 = Boat(boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length="100", address="3400 Pan American Dr Miami", summary="Ferretti  Yacht 12-15 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.727015, longitude=-80.235452, owner_id=2,)

    seed_boat14 = Boat(boat_type="Center Console",
                       total_occupancy=12, total_bedrooms=0, total_bathrooms=1, length="34", address="3400 Pan American Dr Miami", summary="Contender Center Console 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.727022, longitude=-80.235450, owner_id=2,)

    seed_boat15 = Boat(boat_type="Sailboat",
                       total_occupancy=6, total_bedrooms=1, total_bathrooms=1, length="34", address="3400 Pan American Dr Miami", summary="Sail through the Coast 6 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.727020, longitude=-80.235451, owner_id=2,)

    seed_boat16 = Boat(boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length="30", address="4 Grove Isle Dr Miami", summary="Intrepid Center Console 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=450, latitude=25.734580, longitude=-80.219460, owner_id=2,)

    seed_boat17 = Boat(boat_type="Sport",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length="26", address="4 Grove Isle Dr Miami", summary=" Seadoo 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=800, latitude=25.734580, longitude=-80.219461, owner_id=2,)

    seed_boat18 = Boat(boat_type="Catamaran",
                       total_occupancy=20, total_bedrooms=0, total_bathrooms=2, length="42", address="4 Grove Isle Dr Miami", summary="Catamaran SailBoat 20 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2000, latitude=25.734581, longitude=-80.219460, owner_id=2,)

    seed_boat19 = Boat(boat_type="Yacht",
                       total_occupancy=8, total_bedrooms=2, total_bathrooms=2, length="38", address="4 Grove Isle Dr Miami", summary="Azimut Atlantis 10-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=1000, latitude=25.734581, longitude=-80.219461, owner_id=2,)

    seed_boat20 = Boat(boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=5, total_bathrooms=6, length="100", address="4 Grove Isle Dr Miami", summary="Azimut  Yacht 20 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2200, latitude=25.734582, longitude=-80.219461, owner_id=2,)
