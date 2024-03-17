import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [kisiler, setKisiler] = useState([]);
  const [isim,setAd] = useState();
  const [age,setAge] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((user) => user.json())
      .then((users) => {
        setKisiler(users);
      });
  },[kisiler]);


 const handleSubmit = (e) =>{

  e.preventDefault();

  fetch("http://localhost:3000/users",{

  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({ad:isim,yas:age})

  })

  setAd("");
  setAge("");

 }

  return (
    <div className="App">
      <div>
        <ul>
          {kisiler.map((kisi,index) => {
            return (
              <div key={index}>
                <span>{kisi.ad}-{kisi.yas}</span>
              </div>
            );
          })}
        </ul>
      </div>

          <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{
              setAd(e.target.value)
            }} name="ad" value={isim} placeholder="ad" type="text"/> <br/>
            <input onChange={(e)=>{
              setAge(e.target.value)
            }} name="sifre" value={age} placeholder="yas" type="text"/> <br/>
            <button type="submit" >Tik tik</button>
          </form>

    </div>
  );
}

export default App;
