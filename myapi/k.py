import sqlite3


with sqlite3.connect("database.db") as con:
    cur = con.cursor()
    cur.execute("select count(rank) from gamedata;")
    count = cur.fetchone();
    print count