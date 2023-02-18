import AddtoCartIcon from '../assets/icons/cart.svg';
const ListItem = () => {
    return (
        <div className={'item-card'}>
            <img className={'img-fluid'} src="/assets/random.jpg" alt="Cart here" />
            <div className={'item-card__information'}>
                <div>
                    <span>₹350</span>
                    <small>
                        <strike>450</strike>
                    </small>
                </div>
                <div className={'title'}>
                    <h2>Title of the Item</h2>
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