import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.';
import About from './components/About/About.jsx';
import Detail from './components/Detail//Detail';
import Form from './components/Form/Form';
import NotFound from './components/NotFound';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';







const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
const API_KEY = 'df25acae57c8.d39db91b2d150641b500';

const EMAIL = '';
const PASSWORD = '';

function App() {
   
   const location = useLocation().pathname;
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      };
   };

   const logout = () => {
        setAccess(false);
        navigate('/');
    }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id);
      setCharacters(charactersFiltered);
   };
   

   return (
      <div className='App'>
         {location !== '/' ? <Nav onSearch={onSearch} logout={logout}/> : null}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
