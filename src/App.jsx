import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const Home = lazy(() => import("./pages/Home"));

// shop pages
const Shop = lazy(() => import("./pages/Shop"));

// product pages

const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("./pages/NotFound"));

// blog pages

// other pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MyAccount = lazy(() => import("./pages/Account"));
const LoginRegister = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Compare = lazy(() => import("./pages/Compare"));
const Checkout = lazy(() => import("./pages/Checkout"));

const App = () => {
  return (
    <Router>
      {/* <ScrollToTop> */}
      <Suspense
        fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path={"/"} element={<Home />} />

          {/* Shop pages */}

          <Route path={"/shop"} element={<Shop />} />
          {/* Product pages */}

          <Route path={"/product/:id"} element={<Product />} />

          {/* Blog pages */}

          {/* <Route
              path={import.meta.env.VITE_PUBLIC_URL + "/blog"}
              element={<Blog />}
            /> */}

          {/* Other pages */}

          <Route path={`"/about"`} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/my-account"} element={<MyAccount />} />
          <Route path={"/login-register"} element={<LoginRegister />} />

          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
          <Route path={"/compare"} element={<Compare />} />
          <Route path={"/checkout"} element={<Checkout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default App;
