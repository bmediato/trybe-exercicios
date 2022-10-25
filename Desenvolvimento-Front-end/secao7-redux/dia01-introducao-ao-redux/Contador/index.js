import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState= {count: 0};

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer,composeWithDevTools )



const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
  console.log("click");
})