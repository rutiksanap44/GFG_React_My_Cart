import ListItem from '../ListItems/ListItem'
const Products = () => {
    return (
        <div>
            <ListItem data={{
                title: "My product 1",
                discountedPrice: 340,
                price: 400,
                thumbnail: "/assets/random.jpg"
            }}></ListItem>

            <ListItem data={{
                title: "My product 2",
                discountedPrice: 500,
                price: 460,
                thumbnail: "/assets/random.jpg"
            }}></ListItem>
        </div>
    )
}

export default Products;