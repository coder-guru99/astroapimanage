import mysql from "mysql";

export const Database = () => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE mydb", function (err, result) {
          if (err) throw err;
          console.log("Database created");
        });
      });
    return con;
}


export const horoscope_list = [
  {
    name: "Aries"
  }, 
  {
    name: "Taurus"
  },
  {
    name: "Gemini"
  },
  {
    name: "Cancer"
  },
  {
    name: "Leo"
  },
  {
    name: "Virgo"
  },
  {
    name: "Libra"
  },
  {
    name: "Scorpio"
  },
  {
    name: "Sagittarius"
  },
  {
    name: "Capricorn"
  },
  {
    name: "Aquarius"
  },
  {
    name: "Pisces"
  },
]
