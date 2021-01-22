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

    seed_boat10 = Boat(name="Boston Whaler 325 Conquest", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=1, total_bathrooms=1, length=32, address="801 Brickell Bay Dr", summary="Fish, cruise, never have to choose. With the 325 Conquest, “split personality” takes on a whole new meaning. This adventurous boat is so much more than a cabin cruiser: Designed for maximum versatility, the 325 offers purposeful amenities for all your favorite activities.", has_tv=False, has_kitchen=True, has_air_con=False, has_internet=False, has_heating=False, price=2500, latitude=25.76195, longitude=-80.189000, owner_id=1,)

    seed_boat11 = Boat(name="Nautitech 40 Open Catamaran", boat_type="Catamaran",
                       total_occupancy=8, total_bedrooms=3, total_bathrooms=2, length=40, address="3400 Pan American Dr Miami", summary="Most of the catamarans in the market perform well when reaching, but struggle to keep pace upwind. Not the case with the performance design of the Bavaria Open 40, that can safely and easily sail upwind.For her length, she has an impressively tall rig with a generous, modern fully battened square-top mainsail.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=False, has_heating=False, price=500, latitude=25.727022, longitude=-80.235449, owner_id=1,)

    seed_boat12 = Boat(name="Sunseeker Manhattan", boat_type="Yacht",
                       total_occupancy=10, total_bedrooms=1, total_bathrooms=2, length=52, address="3400 Pan American Dr Miami", summary="The entire layout of this boat from the bridge to staterooms will not disappoint as living space and storage is abundant throughout.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=700, latitude=25.727423, longitude=-80.235851, owner_id=1,)

    seed_boat13 = Boat(name="Ferretti Yachts Navetta", boat_type="Yacht",
                       total_occupancy=12, total_bedrooms=4, total_bathrooms=3, length=100, address="3400 Pan American Dr Miami", summary="The decor is contemporary and elegant featuring extensive upgrades from the standard spec encompassing the rich Italian style this builder is known for. The interior finish is a tasteful pickled Oak wood in combination with bleached Oak, teak flooring and tailored leather.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=True, price=900, latitude=25.727823, longitude=-80.236251, owner_id=1,)

    seed_boat14 = Boat(name="Contender 35 ST", boat_type="Center Console",
                       total_occupancy=12, total_bedrooms=0, total_bathrooms=1, length=35, address="3400 Pan American Dr Miami", summary="Contender has always been well known for producing some of the best performing center console fishing boats on the water, and the 35ST, goes beyond those expectations. The innovative dual step design provides dramatic performance increases not only in speed, but also in fuel efficiency, and handling. ", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=400, latitude=25.726622, longitude=-80.235050, owner_id=1,)

    seed_boat15 = Boat(name="Jeanneau 43 DS", boat_type="Sailboat",
                       total_occupancy=6, total_bedrooms=1, total_bathrooms=1, length=34, address="3400 Pan American Dr Miami", summary="The Jeanneau Sun Odyssey 43 DS is designed with families in mind. An L-shaped galley and U-shaped dinette, each to starboard, provide ample room for guests and those tending to them, as do two separate heads. Standing headroom in the cabin ranges from 6 feet 2 inches to 6 feet 11 inches.", has_tv=True, has_kitchen=True, has_air_con=True, has_internet=True, has_heating=False, price=650, latitude=25.726222, longitude=-80.234650, owner_id=1,)

    seed_boat16 = Boat(name="Intrepid 375 Nomad SE", boat_type="Center Console",
                       total_occupancy=8, total_bedrooms=0, total_bathrooms=0, length=37, address="4 Grove Isle Dr Miami", summary="The 375 Nomad brings the best of Intrepid boats aboard one amazing center console. It has all the features of the 345 Nomad but more.", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=450, latitude=25.734580, longitude=-80.219460, owner_id=1,)

    seed_boat17 = Boat(name="Stingray 235 LR", boat_type="Sport",
                       total_occupancy=4, total_bedrooms=0, total_bathrooms=0, length=18, address="4 Grove Isle Dr Miami", summary=" The wide, sport deck design creates a roomy interior, lending way to a convenient side-entry walkway and a head compartment large enough to double as a changing room. For watersports enthusiasts, a large swim platform features built-in drink holders, a fiberglass storage compartment, transom mount trim and tilt, and an optional transom stereo remote.", has_tv=False, has_kitchen=False, has_air_con=False, has_internet=False, has_heating=False, price=800, latitude=25.734980, longitude=-80.219861, owner_id=1,)

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
    db.session.commit()


def undo_boats():
    db.session.execute('TRUNCATE reservations')
    db.session.execute('TRUNCATE boats;')
    db.session.commit()
