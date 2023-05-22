import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// import Favorites from '../Favorites/Favorites';


function Card({ id, name, species, gender,image, onClose, addFav, removeFav, myFavorites }) {
   const dispatch = useDispatch()

   //estado local
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id))
      }
      else {
         setIsFav(true);
         dispatch(addFav( { id, name, species, image,gender }))
      }

   }
   
   useEffect(() => {
   myFavorites?.map((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
         return myFavorites
      });
   },[myFavorites, id]);

   
   return (
      

      <div >
         <div className={style.body}></div>
               
            <div className={style.card}>
                     <div className={`${style.face} ${style.front}`}>
                        <img className={style.img__front} src={image} alt={name} />
                     </div>
                     <div className={`${style.face} ${style.back}`}>
                     <img className={style.img__back} src={image} alt={name} />
                     
                     <button className={style.btn__detail} >
                        <NavLink className={style.nav__det}  to={`/detail/${id}`}><h4>Detail</h4></NavLink> 
                     </button>
                     <button className={style.btn__fav} onClick={handleFavorite}>{ isFav ? '❤️' : '🤍' }</button>
                     <button className={style.btn__close} onClick={() => onClose(id)}>X</button>
                     <p className={style.messageE}>Specie: {species}</p>
                     <p className={style.message}>Name: {name}</p>
               </div>
         </div>   
      </div>
  
   )
} 


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => { 
         dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav !== id) }
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps,
   
)(Card);
