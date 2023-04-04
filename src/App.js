import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements,Route } from "react-router-dom" //old method
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />                 //old method of creating routes
//     <Route path='/products' element={<ProductsPage/>} />
//   </Route>
// );
// const router=createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, //can be used instead of setting path to '/' for loading the page when the parent is active
      { path: "/", element: <HomePage /> }, //route defn object, HomePage component loads when
      // browser navigates to '/' path
      { path: "/products", element: <ProductsPage /> }, //route defn object, ProductPage component
      { path: "/products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
