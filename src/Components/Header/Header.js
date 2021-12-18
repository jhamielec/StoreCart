import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <div><h1>The Greatest Store in the World</h1></div>
            <div className='links'>
            <a href="http://localhost:3000/">Home</a>
            <a href="http://localhost:3000/Cart">Cart</a>
            </div>
            <div className="headCart">
                <button>Check-out</button>
                <div>Items: {props.quantity}</div>
                <div id="amount">${props.amount}</div>
            </div>
        </div>
    )
}

export default Header