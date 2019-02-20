from flask import Flask
import sqlite3, json

from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
   with sqlite3.connect("sales.db") as con:
       cur = con.cursor()
       cur.execute("select count(rank) from sales;")
       count = cur.fetchall();
       cur.execute("select count(Rank) cnt, Publisher from sales group by Publisher Order by cnt desc limit 5")
       publisher = cur.fetchall();
       cur.execute("select count(Rank) cnt, Genre from sales group by Genre Order by cnt desc  limit 5")
       genre = cur.fetchall();
       cur.execute("select count(Rank) cnt, Year from sales group by Year Order by cnt desc  limit 5")
       year = cur.fetchall();
       cur.execute("select count(Rank) cnt, Year from sales group by Year Order by year asc  ")
       yearLine = cur.fetchall();
       data = {"total":count,"publisher":publisher,"genre":genre,"year":year,"yearLine":yearLine}
       return json.dumps(data)

@app.route('/report')
def report():
   with sqlite3.connect("sales.db") as con:
       cur = con.cursor()
       cur.execute("select count(Rank) cnt, Publisher from sales group by Publisher Order by cnt desc limit 10")
       publisher = cur.fetchall()
       cur.execute("select count(Rank) cnt, Genre from sales group by Genre Order by cnt desc limit 10")
       genre = cur.fetchall();
       cur.execute("select count(Rank) cnt, Year from sales group by Year Order by cnt desc limit 10")
       year = cur.fetchall()
   with sqlite3.connect("gameusage.db") as con:
       cur = con.cursor()
       cur.execute("select count(ResponseName), IsFree  from gameusage group by IsFree order by IsFree desc")
       isfree = cur.fetchall()
       cur.execute("select count(ResponseName), CategoryMultiplayer  from gameusage group by CategoryMultiplayer order by cast(SteamSpyPlayersEstimate as int) desc")
       CategoryMultiplayer = cur.fetchall()
       cur.execute("select ResponseName, RecommendationCount  from gameusage  order by RecommendationCount desc limit 10")
       RecommendationTop = cur.fetchall()
       cur.execute("select ResponseName, SteamSpyPlayersEstimate  from gameusage  order by cast(SteamSpyPlayersEstimate as int) desc limit 10")
       playersEstimate = cur.fetchall()
   data = {"publisher":publisher,"genre":genre,"year":year,"isfree":isfree,"isfree":isfree,"CategoryMultiplayer":CategoryMultiplayer,"RecommendationTop":RecommendationTop,"playersEstimate":playersEstimate}

   return json.dumps(data)
if __name__ == '__main__':
   app.run(host = "0.0.0.0", port = 4201)
