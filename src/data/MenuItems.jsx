import Home from '../pages/Home.jsx';
import Lab1 from '../pages/Lab1.jsx';
import Lab2 from '../pages/Lab2.jsx';
import Lab3 from '../pages/Lab3.jsx';
import NotFound from '../pages/NotFound.jsx';

export const menuItems = [
    { id: 1, label: "Home", url: "/", urlPattern: "/",element: <Home></Home>},
    { id: 2, label: "Laboratorium 1", url: "/Lab1",urlPattern: "/Lab1", element: <Lab1></Lab1>},
    { id: 3, label: "Laboratorium 2", url: "/Lab2/1",urlPattern: "/Lab2/:id",element:<Lab2></Lab2> },
    { id: 4, label: "NotFound", url: "/NotFound",urlPattern: "/NotFound",element:<NotFound></NotFound> },
    { id: 5, label: "Laboratorium 3", url: "/Lab3",urlPattern: "/Lab3", element: <Lab3></Lab3>}


  
  ];