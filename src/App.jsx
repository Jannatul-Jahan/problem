
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import ProductsPage from "./pages/products.page";
import RegistrationPage from "./pages/register/registration.page";
import LoginPage from "./pages/register/login.page";
import LogoutPage from "./pages/register/logout.page";
import NotFoundPage from "./pages/notFound.page";
import ProductDetails from "./pages/productDetails.page";
import ProductUpdate from "./pages/productUpdate.page";
import CartPage from "./pages/cart/cart.page";
import TransacetionallPage from "./pages/transactionall.page"
import UserallPage from "./pages/user/userall.page"
import UserUpdate from "./pages/user/userUpdate.page";
import CheckoutPage from "./pages/checkout.page";
import BalancePage from "./pages/balance/balance.page";
import Authenticate from "./pages/authenticate";
import Unauthenticate from "./pages/unauthenticate";
import Admin from "./pages/admin";
import User from "./pages/user";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
       
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/update/:id" element={<ProductUpdate />} />
        
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<Authenticate />}>
          <Route path="/logout" element={<LogoutPage />} />
        </Route>

        <Route element={<Unauthenticate />}>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<Admin />}>
          <Route path="/transactionadmin" element={<TransacetionallPage />} />
          <Route path="/products/update/:id" element={<ProductUpdate />} />
          <Route path="/useralldata" element={<UserallPage />} /> 
          <Route path="/users/update/:id" element={<UserUpdate />} />
        </Route>

        <Route element={<User />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="/Balance" element={<BalancePage />} />
        </Route>



    
      </Routes>
    </>
  );
}

export default App;