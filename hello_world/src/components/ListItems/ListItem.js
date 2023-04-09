import AddtoCartIcon from '../../assets/icons/cart.svg'
import { useState } from 'react';
const ListItem = ({ data }) => {

    let Oldmessage="Not Added to Cart yet"

    const[message, setMessage] = useState(Oldmessage)

    const AddtoCart = () => {
        const NewMessage = 'Item Added to Cart'
        setMessage(NewMessage)
    }
    return (
        <div className={'item-card'}>
            <img className={'img-fluid'} src={data.thumbnail} alt="Cart here" />
            <div className={'item-card__information'}>
                <div className={'price_div'}>
                    <div><span>₹{data.discountedPrice}</span></div>
                    <strike>{data.price}</strike>
                </div>
                <div className={'title'}>
                    <h2>{data.title}</h2>
                </div>
            </div>
            <span className='cart-message'>{message}</span>
            <button className={'cart-add'}>
                <span onClick={() => {AddtoCart()}}>Add to Cart</span>
                <img src={AddtoCartIcon} alt="cart here" />
            </button>
        </div>
    )
};

export default ListItem;