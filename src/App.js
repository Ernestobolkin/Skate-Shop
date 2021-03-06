import { SkatePage } from "./components/pages/skates";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { HomePage } from "./components/pages/HomePage";
import { CheckOut } from "./components/pages/checkOut";
import { useState } from "react";
import { AddItem } from "./components/pages/AddItem";
import { EditItem } from "./components/pages/EditItem";

function App() {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartCheck, setCartCheck] = useState([]);
  const [sumToPay, setSumToPay] = useState(0);
  const [data, setData] = useState([]);
  const [addItem, setAddItem] = useState({
    brand: "",
    frontImg: "",
    backImg: "",
    price: null,
    quantity: 0,
    size: null,
    id: "",
  });
  const [editItem, setEditItem] = useState({
    brand: "",
    frontImg: "",
    backImg: "",
    price: null,
    quantity: 0,
    size: null,
    id: "",
  });
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
  });
  const [isShownAdmin, setIsShownAdmin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <NavBar cartCounter={cartCounter} cartCheck={cartCheck} />
        <Route path="/" exact>
          <HomePage
            isShownAdmin={isShownAdmin}
            setIsShownAdmin={setIsShownAdmin}
            userData={userData}
            setUserData={setUserData}
          />
        </Route>
        <Route path="/skate" exact>
          <SkatePage
            data={data}
            setData={setData}
            isShownAdmin={isShownAdmin}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
            cartCheck={cartCheck}
            setCartCheck={setCartCheck}
            sumToPay={sumToPay}
            setSumToPay={setSumToPay}
          />
        </Route>
        <Route path="/checkout" exact>
          <CheckOut
            cartCheck={cartCheck}
            setCartCheck={setCartCheck}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
            sumToPay={sumToPay}
            setSumToPay={setSumToPay}
          />
        </Route>
        <Route path="/skate/AddItem" exact>
          <AddItem addItem={addItem} setAddItem={setAddItem} />
        </Route>
        <Route path="/skate/edit/:id" exact>
          <EditItem editItem={editItem} setEditItem={setEditItem} />
        </Route>
      </BrowserRouter>
    </>
  );
}
// data={data}
// setData={setData}
export default App;
