#dependencies
import sqlalchemy
import psycopg2
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from config import location

#connection to postgresql database
con=psycopg2.connect(location)
cur = con.cursor()

cur.execute('SELECT * FROM covid_19_us_cases_by_date')
rows = list(cur.fetchall())

app=Flask(__name__)

for i in rows:
    print(i[0])

#home page
@app.route("/")
def home():
    return render_template('index.html',us_covid_19=rows) 

if __name__ == "__main__":
     app.run(debug=True)