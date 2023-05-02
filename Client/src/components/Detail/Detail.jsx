import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import style from'./Detail.module.css'
import { NavLink } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
// const API_KEY = 'df25acae57c8.d39db91b2d150641b500';

function Detail() {

  const [character, setCharacter] = useState({});
  const { id } = useParams()

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.Conteiner}>
      <div className={style.Conteiner__image}>
          <img src={character?.image} alt={character?.name} />
      </div>
      <div className={style.Conteiner__detail}>
          <div className={style.btn__cont}>

          </div>

          <div className={style.detail}>
          <h4>Name: <span>{character?.name}</span></h4>
          <h4>Status: <span>{character?.status}</span></h4>
          <h4>Species: <span>{character?.species}</span></h4>
          <h4>Gender: <span>{character?.gender}</span></h4>
          <h4>Origin: <span>{character?.origin?.name}</span></h4>
          </div>
      </div>
          <button className={style.btn__home}>
              <NavLink className={style.nav} to='/home'>
                <p className={style.back}>Back</p>
              </NavLink>
          </button>

    </div>

  )
}

export default Detail