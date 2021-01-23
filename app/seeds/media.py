from app.models import db, Media


def seed_media():
    seed_media1 = Media(
        media_url="https://powerboating.com/wp-content/uploads/2020/02/34-6-Test-Yacht-CruisersYachts-38GLS.jpg", media_name="main", boat_id=1)
    seed_media1_2 = Media(
        media_url="https://97a16b0000ad8bcf3f6c-9b7cbdf5523aff60a3b1189bc5da9070.ssl.cf1.rackcdn.com/cruisersyachts/slider/66223/slider-4.jpg", media_name="", boat_id=1)
    seed_media1_3 = Media(
        media_url="https://media.inventory.level5marketing.com/dist/app_images/2021-Cruisers_Yachts-38_Gls_Ob-22096-4981270-R797973-20200610033501316.jpg", media_name="", boat_id=1)
    seed_media1_4 = Media(
        media_url="https://vnext.scdn4.secure.raxcdn.com/assets/cruisersyachts/images/models/38gls/gallery/03.jpg", media_name="", boat_id=1)
    seed_media2 = Media(
        media_url="https://images.boats.com/resize/1/53/23/6335323_0_311219691600_1.JPG", media_name="main", boat_id=2)
    seed_media3 = Media(
        media_url="https://www.leopardcatamarans.eu/sites/default/files/boats/L45/Leopard45-webgallery4-012020.jpg", media_name="main", boat_id=3)
    seed_media4 = Media(
        media_url="https://www.saltwatersportsman.com/resizer/s-fMcJxVCJh9dNLx_n_vVbR4t3E=/1200x628/smart/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AB4DQZFV6JFOJONA5KXUFC6UHE.jpg", media_name="main", boat_id=4)
    seed_media5 = Media(
        media_url="https://www.powerandmotoryacht.com/.image/t_share/MTUwMTAzMDY4NTQxNDYyMjk4/nordhavn-96---click-to-enlarge.jpg", media_name="main", boat_id=5)
    seed_media6 = Media(
        media_url="https://images.yachtworld.com/resize/1/23/17/7582317_20200908125902448_1_XLARGE.jpg?f=/1/23/17/7582317_20200908125902448_1_XLARGE.jpg&w=1500&h=1000&t=1602720498000", media_name="main", boat_id=6)
    seed_media7 = Media(
        media_url="https://cimg0.ibsrv.net/gimg/www.thehulltruth.com-vbulletin/1497x634/80-exterior_2_24f51b93532cebb69a501379a622b22093d3a0de.jpg", media_name="main", boat_id=7)
    seed_media8 = Media(
        media_url="https://images.yachtworld.com/resize/1/14/42/6591442_20180125064441700_1_XLARGE.jpg?f=/1/14/42/6591442_20180125064441700_1_XLARGE.jpg&w=2179&h=1406&t=1516891538000", media_name="main", boat_id=8)
    seed_media9 = Media(
        media_url="https://book2sail.com/wp-content/uploads/2019/09/Lagoon-381.jpg", media_name="main", boat_id=9)
    seed_media10 = Media(
        media_url="https://images.yachtworld.com/resize/1/40/98/7514098_20200814105149221_1_XLARGE.jpg?f=/1/40/98/7514098_20200814105149221_1_XLARGE.jpg&w=1280&h=854&t=1597431402000", media_name="main", boat_id=10)
    seed_media11 = Media(
        media_url="https://i.ytimg.com/vi/q8f1udckz1s/maxresdefault.jpg", media_name="main", boat_id=11)
    seed_media12 = Media(
        media_url="https://i.ytimg.com/vi/Ho2HsGTTGVw/maxresdefault.jpg", media_name="main", boat_id=12)
    seed_media13 = Media(
        media_url="http://www.extravaganzi.com/wp-content/uploads/2011/07/Navetta-33-Crescendo-Ziacanaia-1.jpg", media_name="main", boat_id=13)
    seed_media14 = Media(
        media_url="https://contenderboats.com/wp-content/uploads/Contender-35ST-20T01.jpg", media_name="main", boat_id=14)
    seed_media15 = Media(
        media_url="https://imt.boatwizard.com/images/1/39/64/5383964_20150915043753231_1_XLARGE.jpg", media_name="main", boat_id=15)
    seed_media16 = Media(
        media_url="https://images.yachtworld.com/resize/1/48/92/7574892_20200901101542049_1_XLARGE.jpg?f=/1/48/92/7574892_20200901101542049_1_XLARGE.jpg&w=1166&h=778&t=1598984190000", media_name="main", boat_id=16)
    seed_media17 = Media(
        media_url="https://www.lemerryclub.com/wp-content/uploads/2019/02/235lr_running3_Low.jpg", media_name="main", boat_id=17)

    db.session.add(seed_media1)
    db.session.add(seed_media1_2)
    db.session.add(seed_media1_3)
    db.session.add(seed_media1_4)
    db.session.add(seed_media2)
    db.session.add(seed_media3)
    db.session.add(seed_media4)
    db.session.add(seed_media5)
    db.session.add(seed_media6)
    db.session.add(seed_media7)
    db.session.add(seed_media8)
    db.session.add(seed_media9)
    db.session.add(seed_media10)
    db.session.add(seed_media11)
    db.session.add(seed_media12)
    db.session.add(seed_media13)
    db.session.add(seed_media14)
    db.session.add(seed_media15)
    db.session.add(seed_media16)
    db.session.add(seed_media17)
    db.session.commit()


def undo_media():
    db.session.execute("TRUNCATE users;")
    db.session.commit()
