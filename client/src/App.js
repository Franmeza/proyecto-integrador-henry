import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  function onSearch(id) {
    if (characters.some((char) => char.id === parseInt(id)))
      return alert(`El personaje con id ${id} ya ha sido agregado`);

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        }
      })
      .catch((error) =>
        alert(
          "El id ingresado no es valido, por favor ingrese un numero entre 1 y 826",
          error
        )
      );
  }

  const onClose = (id) => {
    const resultado = characters.filter((character) => character.id !== id);
    dispatch(removeFav(id));
    setCharacters(resultado);
  };

  function ShowNavBar() {
    const location = useLocation();
    if (location.pathname !== "/")
      return <NavBar onSearch={onSearch} logout={logout} />;
  }
  //ANTES DE EXPRESS
  // function login(userData) {
  //    if (userData.password === PASSWORD && userData.email === EMAIL) {
  //       setAccess(true);
  //       navigate('/home');
  //    }
  // }

  //DESPUES DE EXPRESS
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  //   useEffect(() => {
  //     !access && navigate("/");
  //   }, [access]);

  return (
    <div className="App">
      <ShowNavBar />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
