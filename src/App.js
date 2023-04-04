import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements,Route } from "react-router-dom" //old method
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />                 //old method of creating routes
//     <Route path='/products' element={<ProductsPage/>} />
//   </Route>
// );
// const router=createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }, //route defn object, HomePage component loads when
  // browser navigates to '/' path
  { path: "/products", element: <ProductsPage /> }, //route defn object, ProductPage component
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
