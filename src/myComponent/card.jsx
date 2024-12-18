import styles from './card.module.css'
const Card = ({img,onClick})=>{
    return(
        <div className={styles.card}  onClick={onClick}>
            <img src={img} alt="cat"  />
        </div>
    )
}
export default Card