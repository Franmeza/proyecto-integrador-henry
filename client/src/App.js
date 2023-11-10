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
import Swal from "sweetalert2";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  function onSearch(id) {
    if (characters.some((char) => char.id === parseInt(id)))
      return alert(`El personaje con id ${id} ya ha sido agregado`);

    axios(`${URL}/rickandmorty/character/${id}`)
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
    Swal.fire({
      title: "Please Wait...",
      html: "Give it some time to load as this app is hosted in a free hosting service. If it takes too much time, reload the page. Thanks!",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const { email, password } = userData;
    const endpoint = `${URL}/rickandmorty/login/`;
    axios(endpoint + `?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      })
      .finally(Swal.close());
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
