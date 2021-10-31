import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AddNewOffer from "./Pages/Home/AddNewOffer/AddNewOffer";
import Home from "./Pages/Home/Home/Home";
import ManageAllOrders from "./Pages/Home/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import OfferDetails from "./Pages/Home/OfferDetails/OfferDetails";
import Offers from "./Pages/Home/Offers/Offers";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/offers">
              <Offers></Offers>
            </Route>
            <PrivateRoute path="/offer/:offerId">
              <OfferDetails></OfferDetails>
            </PrivateRoute>
            <PrivateRoute path="/addNewOffer">
              <AddNewOffer></AddNewOffer>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
