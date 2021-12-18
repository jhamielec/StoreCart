import RouteSwitch from './RouteSwitch'
import {useState,useEffect} from 'react'
import Header from './Header/Header'


function Body() {
    const [inventory,addToInventory]=useState([])
    const [total,updateTotal]=useState(0)
    const [quantity,updateQty]=useState(0)
    const [tab,updateTab]=useState(0)
    useEffect(()=>{
        addToInventory(buildInventory())},[])
    
    useEffect(()=>{
        let newTot=0;
        let newQty=0;
        for (let i =0;i<inventory.length;i+=1) {
            let qty=inventory[i].quantity
            newQty+=qty
            newTot+=qty*inventory[i].price.toFixed(2)
        }
        updateTotal(newTot)
        updateQty(newQty)
    },[inventory,total,quantity])


    return (
        <div>
            <Header 
                amount={total} 
                quantity={quantity}
                home={()=>updateTab(0)}
                shop={()=>updateTab(1)}
            />
            <RouteSwitch 
                inventory={inventory} 
                onClick={(e)=>addToCart(e)}
                tab={tab}
            />
        </div>
    )

    function addToCart(e) {
        const parent=e.target.parentElement.parentElement
        const array=parent.id.split(' ',)
        const index=array[1]
        const val=parent.querySelector('#Qty').value
        const qty=inventory[index].quantity
        if (val==='') {return}
        if (qty+parseInt(val,10)<0) {
            inventory[index].quantity=0
        } else {
            inventory[index].quantity+=parseInt(val,10)
        }
        addToInventory(inventory)
        updateTotal(total+1)
    }
}

export default Body


const itemFactory = (name,price)=>{
    let quantity=0;
    const image='./Items/'+name+'.jpg'
    return {name,price,image,quantity}
}

function buildInventory() {
    let array=[]
    array.push(itemFactory('Banana',.25))
    array.push(itemFactory('Milk',2.25))
    array.push(itemFactory('Apple',.5))
    array.push(itemFactory('Orange',.99))
    array.push(itemFactory('Beef',4.25))
    array.push(itemFactory('Chicken',3.25))
    return array

}