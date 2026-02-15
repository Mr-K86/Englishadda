from flask import Flask, render_template
import pymysql

app = Flask(__name__)

def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="english_adda",
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/vocabulary")
def vocabulary():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM vocabulary")
    words = cursor.fetchall()

    conn.close()
    return render_template("vocabulary.html", words=words)

if __name__ == "__main__":
    app.run(debug=True)
