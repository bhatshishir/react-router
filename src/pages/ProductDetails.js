import { useParams } from "react-router-dom";
function ProductDetails(){
    const params=useParams();       //makes use of the :productId specified in the path
    return(
        <>
        <h1>Welcome to Product details page!</h1>
        <p>{params.productId}</p>
        </>
    )
}
export default ProductDetails;