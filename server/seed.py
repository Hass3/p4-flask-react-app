#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from models import Vehicle,Owner,Title
from datetime import datetime
from config import *

with app.app_context():

    db.drop_all()
    db.create_all()
    owners = [
        Owner(name="John Doe", date_of_birth="1985-06-15", address="123 Elm St"),
        Owner(name="Jane Smith", date_of_birth="1990-03-22", address="456 Oak St"),
        Owner(name="Mike Johnson", date_of_birth="1978-11-02", address="789 Pine St"),
        Owner(name="Emily Davis", date_of_birth="1995-08-30", address="321 Maple Ave"),
        Owner(name="Chris Lee", date_of_birth="1982-12-12", address="654 Birch Rd")
    ]
                    
    vehicles = [
        Vehicle(make="Toyota", model="Corolla", year=2015, price=10000, img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQxgk_oQw3ul8O-QFLuZFXyrbiPQiRQTKvQ&s"),
        Vehicle(make="Honda", model="Civic", year=2018, price=12000, img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rU5mQEQMne3cjcTOLb9id0azT-s-Ci0yBg&s"),
        Vehicle(make="Ford", model="F-150", year=2020, price=25000, img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1DuHv4f8ko9JnxSIJrdSEYgtkBOWcUFaoA&s"),
        Vehicle(make="Chevrolet", model="Malibu", year=2017, price=11000, img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yXuKqdBkH0tHE6toHUsF7u2F2HynSjHC0A&s"),
        Vehicle(make="Acura", model="TL", year=2007, price=5000, img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEGkexVIwXmTJYuq4ooejPBuz5FJMY_VbdQ&s")
    ]


    titles = [
        Title(owner=owners[0], vehicle=vehicles[0], transfer_date=datetime(2021, 5, 20), notes="First owner"),
        Title(owner=owners[1], vehicle=vehicles[1], transfer_date=datetime(2022, 1, 15), notes="Bought used"),
        Title(owner=owners[2], vehicle=vehicles[2], transfer_date=datetime(2020, 9, 10), notes="Company vehicle"),
        Title(owner=owners[3], vehicle=vehicles[3], transfer_date=datetime(2019, 3, 5), notes="Family car"),
        Title(owner=owners[4], vehicle=vehicles[4], transfer_date=datetime(2023, 7, 8), notes="Brand new"),
        Title(owner=owners[1], vehicle=vehicles[0], transfer_date=datetime(2023, 4, 12), notes="Second owner"),
        Title(owner=owners[3], vehicle=vehicles[1], transfer_date=datetime(2024, 2, 1), notes="Recently purchased"),
        Title(owner=owners[0], vehicle=vehicles[3], transfer_date=datetime(2020, 8, 18), notes="Transferred from family"),
        Title(owner=owners[2], vehicle=vehicles[4], transfer_date=datetime(2021, 12, 24), notes="Gifted"),
        Title(owner=owners[4], vehicle=vehicles[2], transfer_date=datetime(2022, 11, 3), notes="Lease buyout")
    ]

    db.session.add_all(owners + vehicles + titles)
    db.session.commit()
    print ("Succesfully seeded")