import './Card.css'

function Card(props) {
    const logo=require(`${ props.url }`)
    const cardId="card "+props.index
    
    return (
        <div className="itemCard">
            <div className="image">
            <img src={logo} alt={props.name}/>
            </div>
            <h3>{props.inventory[props.index].name}</h3>
            <div className="itemInfo" id={cardId}>
                <div className="price">${props.inventory[props.index].price}</div>
                <div>
                <label 
                    htmlFor="Qty">Qty: 
                </label>
                <input 
                    type="number" 
                    min={(props.inventory[props.index].quantity>0)?-1*props.inventory[props.index].quantity:0} 
                    max='99' 
                    id="Qty" 
                    maxLength='30'> 
                </input>
                <button onClick={props.onClick}>Add</button>
                <div>In cart: {props.inventory[props.index].quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default Card