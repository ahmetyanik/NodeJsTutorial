import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import LoginEkrani from "./LoginEkrani";

function App() {
  const [kisiler, setKisiler] = useState([]);
  const [isim, setAd] = useState();
  const [age, setAge] = useState();
  const [sifre, setSifre] = useState();
  const [sifreSonucu, setSifreSonucu] = useState(false);
  
  const [kisiAdi,setKisiAdi] = useState("Henüz kisi secilmedi!");

  const handleClick = (e) =>{

    setKisiAdi(e.target.value);

  }



  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((user) => user.json())
      .then((users) => {
        console.log(users);
        setKisiler(users);
      });
  }, [isim, age, sifre]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ad: isim, yas: age, password: sifre }),
    });

    setAd("");
    setAge("");
    setSifre("");
  };

  return (
    <div className="App">
      {!sifreSonucu ? (
        <LoginEkrani setSifreSonucu={setSifreSonucu} />
      ) : (
        <div>
          <div>YENI KAYIT EKRANI</div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setAd(e.target.value);
              }}
              name="ad"
              value={isim}
              placeholder="ad"
              type="text"
            />{" "}
            <br />
            <input
              onChange={(e) => {
                setAge(e.target.value);
              }}
              name="yas"
              value={age}
              placeholder="yas"
              type="text"
            />{" "}
            <br />
            <input
              onChange={(e) => {
                setSifre(e.target.value);
              }}
              name="sifre"
              value={sifre}
              placeholder="sifre"
              type="text"
            />
            <br />
            <button type="submit">Tik tik</button>
          </form>

          
          <ul>
            {kisiler?.map((kisi, index) => {
              return (
                <div key={index}>
                  <span>
                    {kisi.ad}-{kisi.yas}
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      )}

<div style={{background:"red",height:"10px"}}></div>
<br/>
<br/>
<br/>

<button onClick={handleClick} value="ahmet">Ahmet</button>
<button onClick={handleClick} value="bahadir">Bahadir</button>
<button onClick={handleClick} value="ersan">Ersan</button>

<div>Kisi ismi:{kisiAdi}</div>

    </div>
  );
}

export default App;
