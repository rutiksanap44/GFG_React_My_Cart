import AddtoCartIcon from '../../assets/icons/cart.svg'
import Products from '../Products/Products';
// import AddtoCartIcon from '../assets/'
const ListItem = ({ data }) => {
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
            <button className={'cart-add'}>
                <span>Add to Cart</span>
                <img src={AddtoCartIcon} alt="cart here" />
            </button>
            <Products />
        </div>
    )
};

export default ListItem;