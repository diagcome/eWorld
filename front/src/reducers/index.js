import { combineReducers } from "redux";
import { customerReducer } from "./customer";
import { popupValidatorReducer } from "./popupValidator";
import { slideReducer } from "./slide";
import { productsMenuReducer } from "./productsMenu";
import { recProductReducer } from "./recommendedProduct";
import { allProductsReducer } from "./products";
import { allProductsFiltersReducer } from "./allProductsFilters";
import { authenticationReducer } from "./authentication";
import { cartReducer } from "./cart";
import { blogReducer } from "./blog";
import { orderReducer } from "./order";
import { subscribeReducer } from "./subscribe";
import { starsReducer } from "./stars";

export const rootReducer = combineReducers({
  customer: customerReducer,
  popupValidator: popupValidatorReducer,
  slide: slideReducer,
  productsMenu: productsMenuReducer,
  recProduct: recProductReducer,
  allProducts: allProductsReducer,
  allProductsFilters: allProductsFiltersReducer,
  loginIs: authenticationReducer,
  cart: cartReducer,
  blog: blogReducer,
  orders: orderReducer,
  subscribe: subscribeReducer,
  stars:starsReducer
});
