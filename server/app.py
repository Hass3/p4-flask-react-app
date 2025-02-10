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
        pass


# class OwnerById(Resource):
#     def get(self,id):
#         owner =  Owner.query.filter_by(id=id).first()
#         return owner.to_dict(), 200
    
    
#     def patch(self, id):
#         try: 
#             owner = Owner.query.filter(id=id).first()
#             for attr in request.get_json():
#                 setattr(owner, attr, request.get_json()[attr] )
#             db.session.add(owner)
#             db.session.commit()
#             return owner.to_dict(), 202
#         except:
#             return{}, 400
    
#     def delete(self, id):
#         owner = Owner.query.filter(id=id).first()
#         db.session.delete(owner)
#         db.session.commit()
#         return {}, 204

class Vehicles(Resource):
    
    def get(self):
        cars = [v.to_dict() for v in Vehicle.query.all()]
        return  cars, 200
    
    def post(self):
        pass 

class VehicleById(Resource):

    def get(self,id):
        car = Vehicle.query.filter_by(id = id).first()
        return car.to_dict(), 200





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
if __name__ == '__main__':
    app.run(port=5555, debug=True)

