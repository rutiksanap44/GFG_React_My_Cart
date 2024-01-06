import AddtoCartIcon from '../../assets/icons/cart.svg'
import Header from '../Layout/Header'
const ListItem = ({ data }) => {
    return (
        <div className={'item-card'}>
        <Header></Header>
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
            <button className={'cart-add'}>
                <span>Add to Cart</span>
                <img src={AddtoCartIcon} alt="cart here" />
            </button>
        </div>
    )
};

export default ListItem;