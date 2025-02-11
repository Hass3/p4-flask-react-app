#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Owner, Vehicle, Title

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class Owners(Resource):
    def get(self):
        owners = [o.to_dict() for o in Owner.query.all()]
        return owners, 200


    def post(self):
        try:
            new_owner = Owner(name = request.get_json()["name"], date_of_birth = request.get_json()["date_of_birth"], address = request.get_json()["address"])
            db.session.add(new_owner)
            db.session.commit()
            new_owner_json = {
                'id' : new_owner.id,
                'name' : new_owner.name,
                'date_of_birth' : new_owner.date_of_birth,
                'address': new_owner.address
            }
            return new_owner_json, 201
        except:
            return {}, 400



class OwnerById(Resource):
    def get(self,id):
        owner =  Owner.query.filter_by(id=id).first()
        owner_json={
            'id': owner.id,
            'name': owner.name,
            'date_of_birth': owner.date_of_birth,
            'address': owner.address,
            'vehicles' :[vehicle.to_dict() for vehicle in owner.vehicles]
        }
        return owner_json, 200
    
    
    def patch(self, id):
        try: 
            owner = Owner.query.filter(id=id).first()
            for attr in request.get_json():
                setattr(owner, attr, request.get_json()[attr] )
            db.session.add(owner)
            db.session.commit()
            return owner.to_dict(), 202
        except:
            return{}, 400
    
    def delete(self, id):
        owner = Owner.query.filter(id=id).first()
        db.session.delete(owner)
        db.session.commit()
        return {}, 204

class Vehicles(Resource):
    
    def get(self):
        cars = [v.to_dict() for v in Vehicle.query.all()]
        return  cars, 200
    
    def post(self):
        try:
            new_vehicle = Vehicle(make = request.get_json()['make'], model = request.get_json()['model'], year = request.get_json()['year'], price = request.get_json()['price'], img_url = request.get_json()['img_url'])
            db.session.add(new_vehicle)
            db.session.commit()
            new_vehicle_json = {
                'id': new_vehicle.id,
                'make': new_vehicle.make,
                'model': new_vehicle.model,
                'year': new_vehicle.year,
                'price': new_vehicle.price,
                'img_url':  new_vehicle.img_url
            }
            return new_vehicle_json, 201
        except:
            return {} , 400


class VehicleById(Resource):
    def get(self,id):
        car = Vehicle.query.filter_by(id = id).first()
        car_json ={
            'id': car.id,
            'make': car.make,
            'model': car.model,
            'year': car.year,
            'price': car.price,
            'img_url': car.img_url,
            'owners': [o.to_dict() for o in car.owners]
        }
        return car_json, 200


class Titles(Resource):
    def get(self):
        titles =  [t.to_dict() for t in Title.query.all()]
        return titles, 200
    
    def post(self):
        pass

api.add_resource(Titles, '/titles')
api.add_resource(Vehicles, '/vehicles')
api.add_resource(Owners, '/owners')
api.add_resource(VehicleById, '/vehicles/<int:id>')
api.add_resource(OwnerById, '/owners/<int:id>')
if __name__ == '__main__':
    app.run(port=5555, debug=True)

