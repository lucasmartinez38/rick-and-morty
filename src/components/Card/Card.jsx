import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({ id, name, species, gender,image, onClose, addFav, removeFav, myFavorites }) {

   //estado local
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav( { id, name, species, gender,image, onClose })
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites]);

   
   return (

      <div>
                  <div  className={style.body}></div>
               
               <div className={style.card}>
                     <div className={`${style.face} ${style.front}`}>
                        <img className={style.img__front} src={image} alt={name} />
                     </div>
                     <div className={`${style.face} ${style.back}`}>
                     <img className={style.img__back} src={image} alt={name} />
                      <NavLink to={`/detail/${id}`}><h4>Detail</h4></NavLink> 
               </div>
         </div>   

      </div>



            /* <div class="carta-box">
               <div class="carta">    
               <div class="cara">
               <img src={image} alt={name} />
               </div>
               <div class="cara detras">      
               <button className={style.btn} onClick={() => onClose(id)}>X</button>
               <p className={style.message}>Name: {name}</p>
               <button onClick={handleFavorite}>{ isFav ? '❤️' : '🤍' }</button>   
                        
               </div>    
               </div>
               </div>
            */
      



                        
                  
          
      
   )
} 


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps =(dispatch) =>{
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
