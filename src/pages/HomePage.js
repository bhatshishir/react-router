import {Link} from 'react-router-dom';
const HomePage=()=>{
    return(
        <>
        <h1>Welcome to the home page!</h1>
        <p>Go to <Link to="/products">list of products</Link></p>
        </>
    )
}
export default HomePage;