import React, { useState } from "react";

function LoginEkrani({setSifreSonucu}) {
  const [isim, setIsim] = useState();
  const [sifre, setSifre] = useState();

  const [errorMessage,setErrorMessage] = useState();

 

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ad: isim, password: sifre }),
    }).then(res=>res.json()).then(res=>setSifreSonucu(res.status))

    setIsim("");
    setSifre("");
  };

  return (
    <div>
        <div>LOGIN EKRANI</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setIsim(e.target.value);
          }}
          name="isim"
          value={isim}
          placeholder="isim"
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
        />{" "}
        <br />
        <button type="submit">Tik tik</button>
      </form>
    </div>
  );
}

export default LoginEkrani;
