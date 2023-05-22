import Card from '../Card/Card.jsx';
import style from'./Cards.module.css'

export default function Cards({ characters, onClose }) {
   return (
      <div  className={style.container}>
         {
            characters.map(({ id, name, status, species, gender, origin, image, key}) => {
               return (
                  <Card
                  Key = {id.toString}
                  id = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onClose={onClose}
                  />
                  )
               })
            }
      </div>
   )
}
