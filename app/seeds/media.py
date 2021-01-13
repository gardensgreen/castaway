from app.models import db, Media


def seed_media():
    seed_media1 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpowerboating.com%2Fwp-content%2Fuploads%2F2020%2F02%2F34-6-Test-Yacht-CruisersYachts-38GLS.jpg&f=1&nofb=1", media_name="main", boat_id=2)
    seed_media2 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F97a16b0000ad8bcf3f6c-9b7cbdf5523aff60a3b1189bc5da9070.ssl.cf1.rackcdn.com%2Fcruisersyachts%2Fslider%2F66223%2Fslider-4.jpg&f=1&nofb=1", media_name="main", boat_id=2)
    seed_media3 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Qw1EMifWO8ZvcPvHnlC9FgHaEK%26pid%3DApi&f=1", media_name="main", boat_id=3)
    seed_media4 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gjY645APoLo7gphLjuOkrQHaEK%26pid%3DApi&f=1", media_name="main", boat_id=3)
    seed_media5 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cozumel-boat-charters.com%2Fwebsites%2Fimages%2Fboats%2F38ft-luxury-catamaran-bda%2F38ft-luxury-catamaran-bda-pic-3.jpg&f=1&nofb=1", media_name="main", boat_id=4)
    seed_media6 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.isla-mujeres-boat-charters.com%2Fwebsites%2Fimages%2Fboats%2F38ft-cruising-catamaran-2%2F38ft-cruising-catamaran-2-pic-8.jpg&f=1&nofb=1", media_name="main", boat_id=4)
    seed_media7 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.denisonyachtsales.com%2Fimages%2Fapi-listings%2F1%2F49%2F18%2F6394918_20171009105127222_1_XLARGE.jpg&f=1&nofb=1", media_name="main", boat_id=5)
    seed_media8 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fsouthernboating.com%2Fwp-content%2Fuploads%2F2017%2F10%2FSunseeker-95-Yacht.jpg%3Ffit%3D1024%252C672%26ssl%3D1&f=1&nofb=1", media_name="main", boat_id=6)
    seed_media9 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.boats.com%2Fresize%2F1%2F53%2F28%2F6665328_0_300320181410_2.JPG&f=1&nofb=1", media_name="main", boat_id=7)
    seed_media10 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqjyjmFTF6KE%2Fmaxresdefault.jpg&f=1&nofb=1", media_name="main", boat_id=8)
    seed_media11 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.northropandjohnson.com%2Fapi%2F%3Fi%3Dwp-content%2Fuploads%2F2020%2F04%2F5ea8f1c1dec42b2eeb43b290e9b2d50c.jpg%3Fauto%3Dformat%252Cenhance%252Ccompress%26fm%3Djpg%26dl%3DSundance-10.jpg%26w%3D900%26ar%3D16%3A9%26fit%3Dcrop&f=1&nofb=1", media_name="main", boat_id=9)
    seed_media12 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffeatures.boats.com%2Fboat-content%2Ffiles%2F2018%2F12%2Fphotos-my-377-1330x800-e1544806555464.jpg&f=1&nofb=1", media_name="main", boat_id=10)
    seed_media13 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kusleryachts.com%2Fwp-content%2Fuploads%2F2018%2F10%2F133751_0_080620091035_0.jpg&f=1&nofb=1", media_name="main", boat_id=11)
    seed_media14 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphotos.inautia.com%2FbarcosOcasion%2F7%2F9%2F9%2F8%2Ffountaine-pajot-fountaina-pajot-athena-38-42105040120857495352655456554567x.JPG&f=1&nofb=1", media_name="main", boat_id=12)
    seed_media15 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgs.yachthub.com%2F2%2F4%2F8%2F0%2F1%2F9%2F0_4.jpg&f=1&nofb=1", media_name="main", boat_id=13)
    seed_media16 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimt.boatwizard.com%2Fimages%2F1%2F57%2F46%2F5365746_20150828145509965_1_XLARGE.jpg&f=1&nofb=1", media_name="main", boat_id=14)
    seed_media17 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontenderboats.com%2Fwp-content%2Fuploads%2FContender-35ST-300.jpg&f=1&nofb=1", media_name="main", boat_id=15)
    seed_media18 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.calibreyachts.com%2Fwp-content%2Fuploads%2F2016%2F11%2FLone-Eagle_0066_1.jpg&f=1&nofb=1", media_name="main", boat_id=16)
    seed_media19 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thehulltruth.com%2Fattachment.php%3Fattachmentid%3D727854%26stc%3D1%26d%3D1474404910&f=1&nofb=1", media_name="main", boat_id=17)
    seed_media20 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fboats.iboats.com%2Fsites%2Fseadoo%2Fsite_page_15777%2Fimages%2Fl_26.jpg&f=1&nofb=1", media_name="main", boat_id=18)
    seed_media21 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewimages.yachtworld.com%2Fresize%2F1%2F79%2F40%2F7067940_20190430112923328_1_XLARGE.jpg%3Ff%3D%2F1%2F79%2F40%2F7067940_20190430112923328_1_XLARGE.jpg%26w%3D1100%26h%3D733%26t%3D1556652563000&f=1&nofb=1", media_name="main", boat_id=19)
    seed_media22 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpictures.topspeed.com%2FIMG%2Fcrop%2F201409%2Fazimut-atlantis-38-10_1600x0w.jpg&f=1&nofb=1", media_name="main", boat_id=20)
    seed_media23 = Media(
        media_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GpckSUcD7x7zdzb38HjnTgHaEK%26pid%3DApi&f=1", media_name="main", boat_id=21)

    db.session.add(seed_media1)
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
    db.session.add(seed_media18)
    db.session.add(seed_media19)
    db.session.add(seed_media20)
    db.session.add(seed_media21)
    db.session.add(seed_media22)
    db.session.add(seed_media23)
    db.session.commit()


def undo_media():
    db.session.execute("TRUNCATE users;")
    db.session.commit()
