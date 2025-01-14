import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import { setProducts } from "./store/slices/product-slice";
import products from "./data/products.json";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";
import "./i18n";

store.dispatch(setProducts(products));

console.log("Hello", import.meta.env.VITE_PUBLIC_URL);
console.log(import.meta.env.VITE_PUBLIC_URL + "/home-fashion");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistProvider>
      <App />
    </PersistProvider>
  </Provider>
);
