import { BrowserRouter, Routes, Route, createSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Items from "./Items";
import Additem from "./Additem";
import Cart from "./Cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import RootReducer from "./reducers/RootReducer";
import { Provider } from "react-redux";
import {createStore} from 'redux';
import Footer from "./Footer";

function App() {
  const persisConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persisConfig, RootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Items />} />
              <Route path="/additem" element={<Additem />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
          <Footer/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
