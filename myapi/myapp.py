from flask import Flask
import sqlite3, json
from flask_cors import CORS
app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
   

   with sqlite3.connect("database.db") as con:
       cur = con.cursor()
       cur.execute("select count(rank) from gamedata;")
       count = cur.fetchone();
       cur.execute("select count(Rank) cnt, Publisher from gamedata group by Publisher Order by cnt desc")
       publisher = cur.fetchall();
       cur.execute("select count(Rank) cnt, Genre from gamedata group by Genre Order by cnt desc")
       genre = cur.fetchall();
       cur.execute("select count(Rank) cnt, Year from gamedata group by Year Order by cnt desc")
       year = cur.fetchall();
       data = {"count":count,"publisher":publisher,"genre":genre,"year":year}
       return json.dumps(data)
   



if __name__ == '__main__':
   app.run(host = "0.0.0.0", port = 4201)
