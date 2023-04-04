import { Link } from "react-router-dom";
const PRODUCTS=[{
    id:1,
    name:"product-1",
},
{
    id:2,
    name:"product-2",
},
{
    id:3,
    name:"product-3",
}]
function ProductsPage(){
    return(
        <>
        <h1>Welcome to the products page!</h1>
        {PRODUCTS.map(product=>(
            <li key={product.id}><Link to={`/products/${product.name}`}>{product.name}</Link></li>
        ))}
        {/* <Link to="/products/product1">product-1</Link>
        <Link to="/products/product2">product-2</Link>
        <Link to="/products/product3">product-3</Link> */}
        {/* <p>product 1</p>
        <p>product 2</p>
        <p>product 3</p> */}
        </>
    )
}
export default ProductsPage;