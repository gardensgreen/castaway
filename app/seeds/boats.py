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
                      total_occupancy=12, total_bedrooms=1, total_bathrooms=1, length=38, address="3501 Rickenbacker Cswy", summary="The 38 GLS’s innovative design features everything you love about the Cantius series but with triple Mercury Verados.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=900, latitude=25.742861, longitude=-80.170609, owner_id=1,)

    seed_boat2 = Boat(name="Regal 2800 Bowrider",
                      boat_type="Sport",
                      total_occupancy=8, total_bedrooms=0, total_bathrooms=1, length=28, address="3501 Rickenbacker Cswy", summary="Rich in comfort and amenities, the 2800 is the perfect combination of beauty and brawn. Experience the thrill of speed without sacrificing the cockpit comfort that brings everyone together for the perfect day out on the water.", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=500, latitude=25.742461, longitude=-80.170209, owner_id=1,)

    seed_boat3 = Boat(name="Leopard 45", boat_type="Catamaran",
                      total_occupancy=10, total_bedrooms=3, total_bathrooms=2, length=45, address="3501 Rickenbacker Cswy", summary="Awarded Boat of the Year honors in 2017 and founded upon the ethos of continuous innovation and feedback from cruising clients, the Leopard 45 sailing catamaran represents astute value, elegant lines and satisfies blue water passion.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.742061, longitude=-80.171209, owner_id=1,)

    seed_boat4 = Boat(name="Boston Whaler 405 Conquest", boat_type="Center Console",
                      total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=42, address="3501 Rickenbacker Cswy", summary="The 405 Conquest, aka the SUV of the Sea, is envisioned from the keel up as an adventure-ready cruiser, the 405 delivers incredible performance, versatility and ease of use. From the robust bow lounge area, to the ultra-convertible helm companion zone, to the inviting cabin with master and two guest sleeping quarters, the 405 brings sophistication and luxury to the Conquest series. ", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.741661, longitude=-80.170809, owner_id=1)

    seed_boat5 = Boat(name="Nordhavn 96", boat_type="Yacht",
                      total_occupancy=10, total_bedrooms=4, total_bathrooms=3, length=95, address="3501 Rickenbacker Cswy", summary="The Nordhavn 96 truly is the ideal boat for the yachtsman looking to step up his game. For one busy N86 owner looking to move up, it was the layout and roomy, separated crew quarters of the N96 – ideal for his full-time four-person crew – that cinched the deal over other similar-sized boats.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.741261, longitude=-80.170409, owner_id=1,)

    seed_boat6 = Boat(name="Boston Whaler 240 Vantage", boat_type="Center Console",
                      total_occupancy=5, total_bedrooms=0, total_bathrooms=1, length=24, address="801 Brickell Bay Dr", summary="The 240 Vantage is a true “do-it-all” boat, delivering remarkable versatility and comfort. With an array of smart features for fishing, cruising, beaching, watersports and entertaining, this spacious dual console model is perfect for active families eager to enjoy everything the water has to offer.", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.764760, longitude=-80.189010, owner_id=1,)

    seed_boat7 = Boat(name="Intrepid 407 Panacea",
                      boat_type="Center Console",
                      total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=42, address="801 Brickell Bay Dr", summary="The 407 Panacea satisfies every desire a boater can imagine. That happens when you see to every detail with unparalleled precision. It’s the ultimate day boat that’s also a stay boat without compromising fishability.", has_tv=False, has_kitchen=False, has_air_con=True, has_internet=False, has_heating=False, price=650, latitude=25.764861, longitude=-80.189011, owner_id=1,)

    seed_boat8 = Boat(name="Sea Ray 650 Sundancer", boat_type="Yacht",
                      total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length=65, address="801 Brickell Bay Dr", summary="This Gorgeous L650 Sundancer is loaded with optional equipment and Captain maintained.  Low hours on her C18 Caterpillar's at 388 hours.  Hydraulic bow and stern thrusters with inboard joy stick docking system makes her very easy to maneuver around the docks.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2800, latitude=25.765962, longitude=-80.189001, owner_id=1,)

    seed_boat9 = Boat(name="Lagoon 380", boat_type="Catamaran",
                      total_occupancy=7, total_bedrooms=1, total_bathrooms=1, length=38, address="801 Brickell Bay Dr", summary="Clean and nice!", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=550, latitude=25.767062, longitude=-80.189020, owner_id=1)

    seed_boat10 = Boat(name="Boston Whaler 30", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=30, address="801 Brickell Bay Dr", summary="Center Console 6 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2500, latitude=25.76195, longitude=-80.189000, owner_id=1,)

    seed_boat11 = Boat(name="Catamaran 38", boat_type="Catamaran",
                       total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length=38, address="3400 Pan American Dr Miami", summary="Catamaran SailBoat 6-8 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.727022, longitude=-80.235449, owner_id=1,)

    seed_boat12 = Boat(name="Cruising Yacht 52", boat_type="Yacht",
                       total_occupancy=10, total_bedrooms=1, total_bathrooms=2, length=52, address="3400 Pan American Dr Miami", summary="Cruising Yacht 8-10 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.727423, longitude=-80.235851, owner_id=1,)

    seed_boat13 = Boat(name="Ferretti 100", boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length=100, address="3400 Pan American Dr Miami", summary="Ferretti  Yacht 12-15 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.727823, longitude=-80.236251, owner_id=1,)

    seed_boat14 = Boat(name="Contender 34", boat_type="Center Console",
                       total_occupancy=12, total_bedrooms=0, total_bathrooms=1, length=34, address="3400 Pan American Dr Miami", summary="Contender Center Console 6 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.726622, longitude=-80.235050, owner_id=1,)

    seed_boat15 = Boat(name="Sailboat 34", boat_type="Sailboat",
                       total_occupancy=6, total_bedrooms=1, total_bathrooms=1, length=34, address="3400 Pan American Dr Miami", summary="Sail through the Coast 6 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.726222, longitude=-80.234650, owner_id=1,)

    seed_boat16 = Boat(name="Intrepid 30", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length=30, address="4 Grove Isle Dr Miami", summary="Intrepid Center Console 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=450, latitude=25.734580, longitude=-80.219460, owner_id=1,)

    seed_boat17 = Boat(name="Seadoo 26", boat_type="Sport",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length=26, address="4 Grove Isle Dr Miami", summary=" Seadoo 8 People", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=800, latitude=25.734980, longitude=-80.219861, owner_id=1,)

    seed_boat18 = Boat(name="Catamaran 42", boat_type="Catamaran",
                       total_occupancy=20, total_bedrooms=0, total_bathrooms=2, length=42, address="4 Grove Isle Dr Miami", summary="Catamaran SailBoat 20 People", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2000, latitude=25.735380, longitude=-80.220261, owner_id=1,)

    seed_boat19 = Boat(name="Azimut Atlantis 38", boat_type="Yacht",
                       total_occupancy=8, total_bedrooms=2, total_bathrooms=2, length=38, address="4 Grove Isle Dr Miami", summary="Azimut Atlantis 10-12 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=1000, latitude=25.734181, longitude=-80.219061, owner_id=1,)

    seed_boat20 = Boat(name="Azimut 100", boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=5, total_bathrooms=6, length=100, address="4 Grove Isle Dr Miami", summary="Azimut  Yacht 20 People", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=2200, latitude=25.733782, longitude=-80.218661, owner_id=1,)

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
