import ListItem from '../ListItems/ListItem'

const items = [
    {
        id: 0,
        title: "My product 1",
        discountedPrice: 340,
        price: 400,
        thumbnail: "/assets/random.jpg"

    },
    {
        id: 1,
        title: "My product 2",
        discountedPrice: 500,
        price: 460,
        thumbnail: "/assets/random.jpg"
    }
]

const Products = () => {
    return (
        <div className='product-list'>
            <ListItem data={items[0]}></ListItem>
            <ListItem data={items[1]}></ListItem>
        </div>
    )
}

export default Products;