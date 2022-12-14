import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
function App() {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    if (darkTheme === true) {
      document.documentElement.classList.add("dark");
    }
  }, [darkTheme]);

  return (
    <>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Photos />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </>
    </>
  );
}

export default App;

/*# Challenge

Set up React Router for our app. We should be able to do the following:

1. Click on the words "Pic Some" in the header to go to the "/" route, which should display the Photos component (found in the pages folder)

2. Click on the shopping cart icon in the header to go to the "/cart" route, which should display the Cart component (found in the pages folder)

 */
