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
    seed_boat1 = Boat(name="Cruiser Yachts 38GLS",
                      boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=1, total_bathrooms=1, length=38, address="3501 Rickenbacker Cswy", summary="The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=900, latitude=25.742861, longitude=-80.170609, owner_id=3,)

    seed_boat2 = Boat(name="Seadoo 230 Challenger",
                      boat_type="Sport",
                      total_occupancy=6, total_bedrooms=0, total_bathrooms=0, length=20, address="3501 Rickenbacker Cswy", summary=" Seadoo 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=500, latitude=25.742461, longitude=-80.170209, owner_id=3,)

    seed_boat3 = Boat(name="Catamaran 38", boat_type="Catamaran",
                      total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length=38, address="3501 Rickenbacker Cswy", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.742061, longitude=-80.171209, owner_id=3,)

    seed_boat4 = Boat(name="Boston Whaler 42", boat_type="Center Console",
                      total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=42, address="3501 Rickenbacker Cswy", summary="Boston Whaler 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.741661, longitude=-80.170809, owner_id=3)

    seed_boat5 = Boat(name="Yacht 95", boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length=95, address="3501 Rickenbacker Cswy", summary=" Yacht 8-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.741261, longitude=-80.170409, owner_id=3,)

    seed_boat6 = Boat(name="Boston Whaler 24", boat_type="Center Console",
                      total_occupancy=6, total_bedrooms=0, total_bathrooms=1, length=24, address="801 Brickell Bay Dr", summary="Center Console 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.764760, longitude=-80.189010, owner_id=3,)

    seed_boat7 = Boat(name="Intrepid 42",
                      boat_type="Center Console",
                      total_occupancy=12, total_bedrooms=1, total_bathrooms=1, length=42, address="801 Brickell Bay Dr", summary="Intrepid 10-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.764861, longitude=-80.189011, owner_id=3,)

    seed_boat8 = Boat(name="Sundance 95",
                      boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=5, total_bathrooms=4, length=95, address="801 Brickell Bay Dr", summary="Sundance Yacht 10-15 People with 1 waverunner", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2800, latitude=25.765962, longitude=-80.189001, owner_id=3,)

    seed_boat9 = Boat(name="Catamaran 32", boat_type="Catamaran",
                      total_occupancy=7, total_bedrooms=1, total_bathrooms=1, length=32, address="801 Brickell Bay Dr", summary="Catamaran 6-8 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=550, latitude=25.767062, longitude=-80.189020, owner_id=3)

    seed_boat10 = Boat(name="Boston Whaler 30", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=30, address="801 Brickell Bay Dr", summary="Center Console 6 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2500, latitude=25.76195, longitude=-80.189000, owner_id=3,)

    seed_boat11 = Boat(name="Catamaran 38", boat_type="Catamaran",
                       total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length=38, address="3400 Pan American Dr Miami", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.727022, longitude=-80.235449, owner_id=3,)

    seed_boat12 = Boat(name="Cruising Yacht 52", boat_type="Yacht",
                       total_occupancy=10, total_bedrooms=1, total_bathrooms=2, length=52, address="3400 Pan American Dr Miami", summary="Cruising Yacht 8-10 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.727423, longitude=-80.235851, owner_id=3,)

    seed_boat13 = Boat(name="Ferretti 100", boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length=100, address="3400 Pan American Dr Miami", summary="Ferretti  Yacht 12-15 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.727823, longitude=-80.236251, owner_id=3,)

    seed_boat14 = Boat(name="Contender 34", boat_type="Center Console",
                       total_occupancy=12, total_bedrooms=0, total_bathrooms=1, length=34, address="3400 Pan American Dr Miami", summary="Contender Center Console 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.726622, longitude=-80.235050, owner_id=3,)

    seed_boat15 = Boat(name="Sailboat 34", boat_type="Sailboat",
                       total_occupancy=6, total_bedrooms=1, total_bathrooms=1, length=34, address="3400 Pan American Dr Miami", summary="Sail through the Coast 6 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.726222, longitude=-80.234650, owner_id=3,)

    seed_boat16 = Boat(name="Intrepid 30", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length=30, address="4 Grove Isle Dr Miami", summary="Intrepid Center Console 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=450, latitude=25.734580, longitude=-80.219460, owner_id=3,)

    seed_boat17 = Boat(name="Seadoo 26", boat_type="Sport",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length=26, address="4 Grove Isle Dr Miami", summary=" Seadoo 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=800, latitude=25.734980, longitude=-80.219861, owner_id=3,)

    seed_boat18 = Boat(name="Catamaran 20", boat_type="Catamaran",
                       total_occupancy=20, total_bedrooms=0, total_bathrooms=2, length=42, address="4 Grove Isle Dr Miami", summary="Catamaran SailBoat 20 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2000, latitude=25.735380, longitude=-80.220261, owner_id=3,)

    seed_boat19 = Boat(name="Azimut Atlantis 38", boat_type="Yacht",
                       total_occupancy=8, total_bedrooms=2, total_bathrooms=2, length=38, address="4 Grove Isle Dr Miami", summary="Azimut Atlantis 10-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=1000, latitude=25.734181, longitude=-80.219061, owner_id=3,)

    seed_boat20 = Boat(name="Azimut 100", boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=5, total_bathrooms=6, length=100, address="4 Grove Isle Dr Miami", summary="Azimut  Yacht 20 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2200, latitude=25.733782, longitude=-80.218661, owner_id=3,)

    db.session.add(seed_boat1)
    db.session.add(seed_boat2)
    db.session.add(seed_boat3)
    db.session.add(seed_boat4)
    db.session.add(seed_boat5)
    db.session.add(seed_boat6)
    db.session.add(seed_boat7)
    db.session.add(seed_boat8)
    db.session.add(seed_boat9)
    db.session.add(seed_boat10)
    db.session.add(seed_boat11)
    db.session.add(seed_boat12)
    db.session.add(seed_boat13)
    db.session.add(seed_boat14)
    db.session.add(seed_boat15)
    db.session.add(seed_boat16)
    db.session.add(seed_boat17)
    db.session.add(seed_boat18)
    db.session.add(seed_boat19)
    db.session.add(seed_boat20)
    db.session.commit()


def undo_boats():
    db.session.execute('TRUNCATE reservations')
    db.session.execute('TRUNCATE boats;')
    db.session.commit()
