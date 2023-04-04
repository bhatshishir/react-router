import {Link,useNavigate} from 'react-router-dom';
const HomePage=()=>{
const navigate=useNavigate();
    const navHandler=()=>{
        navigate('/products');
    }
    return(
        <>
        <h1>Welcome to the home page!</h1>
        <p>Go to <Link to="/products">list of products</Link></p>
        {/* just an example to show how useNavigate() works. never use a button handler to navigate always use navlinks */}
        <button onClick={navHandler}>Navigate</button>      
        </>
    )
}
export default HomePage;