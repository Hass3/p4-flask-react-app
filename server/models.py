from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.sql import func
from sqlalchemy.ext.associationproxy import association_proxy

from config import db




# Models go here!
class Owner(db.Model, SerializerMixin):
    __tablename__ = 'owners'
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    date_of_birth = db.Column(db.String)
    address = db.Column(db.String)
    
    
    titles = db.relationship("Title", back_populates = "owner", cascade='all, delete-orphan')
    vehicles = db.relationship("Vehicle", secondary = "titles",  back_populates = "owners", overlaps = 'titles')
    serialize_only= ('id', 'name', 'date_of_birth', 'address')
    
    serialize_rules  = ('-titles.owner', '-vehicles.owners')

class Vehicle(db.Model, SerializerMixin):
    __tablename__ =  'vehicles'
    
    id = db.Column(db.Integer, primary_key = True)
    make = db.Column(db.String)
    model = db.Column(db.String)
    year = db.Column(db.Integer)
    price = db.Column(db.Integer)
    img_url = db.Column(db.String)
    
    titles = db.relationship("Title", back_populates = "vehicle", cascade='all, delete-orphan')
    owners = db.relationship( "Owner", secondary = "titles" , back_populates = "vehicles", overlaps = 'titles')
    serialize_only= ('id','make', 'model', 'year', 'price', 'img_url')
    serialize_rules  = ('-titles.vehicle', '-owners.vehicles')
class Title(db.Model,SerializerMixin):
    __tablename__ = 'titles'

    id = db.Column(db.Integer, primary_key = True)
    transfer_date = db.Column(db.String)
    notes = db.Column(db.String)
    owner_id = db.Column(db.Integer, db.ForeignKey("owners.id"))
    vehicle_id = db.Column(db.Integer, db.ForeignKey("vehicles.id"))
    

    owner = db.relationship("Owner" , back_populates = "titles",  overlaps="vehicles,owners")
    vehicle = db.relationship("Vehicle", back_populates = "titles",  overlaps="owners,vehicles")
    
    serialize_rules = ('-owner.titles', '-vehicle.titles')