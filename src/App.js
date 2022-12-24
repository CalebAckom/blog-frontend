import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import SinglePost from "./pages/SinglePost"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    children: [
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/post/:id",
        element:<SinglePost/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]); 

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}


export default App;
