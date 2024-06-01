import Thubmnail from './assets/furina.png' 
console.log('Parameter Card')
function Card (props){
    return (
        <div className ="card">
            <img className='cardImage' src={Thubmnail} alt="Thumbnail"></img>
            <h2 className='cardTitle'>{props.name}</h2>
            <p className='cardDesc'>{props.desc}</p>
            <button className='cardButton'>Order Now</button>
        </div>
    )
}
export default Card