import Card from './Card'
import './Cart.css'

function Cart(props) {
    if (props.inventory.length===0) return null
    return (
        <div className='Cart'>
            {props.inventory.map((element,i)=>{
                return <Card inventory={props.inventory} 
                onClick={props.onClick} 
                url={props.inventory[i].image}
                index={i} 
                key={props.inventory[i].name}/>
            })}
        </div>

    )
}

export default Cart