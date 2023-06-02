import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail//Detail";
import Form from "./components/Form/Form";
import NotFound from "./components/NotFound";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addCharacters,
//   addLocation,
//   searchCharacter,
// } from "./redux/actions"

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
// const API_KEY = 'df25acae57c8.d39db91b2d150641b500';

// const EMAIL = "lukitas@gmail.com";
// const PASSWORD = "123asd";
const URL = "http://localhost:3001/rickandmorty";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]); 
  // const { characters } = useSelector((state) => state);  
  const location = useLocation().pathname;
  //////////////////////////////////////////////////////////////////
  const dispatch = useDispatch()
  /////////////////////////////////////////////////////////////////

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(`${URL}/login?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
//////////////////////////////////
  // useEffect(() => {
  //   dispatch(addLocation(location.pathname));
  // }, [dispatch, location]);
  /////////////////////////////////////////////////////////
  const logout = () => {
    setAccess(false);
    navigate("/");
  };
  ///////////////////////////////////////////////////////////////////
    useEffect(() => {
      axios
        .get(`http://localhost:3001/rickandmorty/characters`)
        .then((results) => {
          console.log(":::", results.data);
          setCharacters([...results.data]);
          dispatch(addCharacters(results.data));
        });
    }, []);
  /////////////////////////////////////////////////////////////////
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };
  /////////////////////////////////////////////////////////////////////
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };
  ///////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      { location !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////
export default App;
