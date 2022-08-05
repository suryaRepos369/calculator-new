import React, { useState } from "react";
//import "./home.css";
import Bill from "./bill/bill";
import Style from "../addons/Style";
import Theme from "../addons/Theme";
const Home = () => {
  const [theme, setTheme] = useState(false);
  const [style, setStyle] = useState(false);
  const [size, setSize] = useState(false);
  function pageStyleHandler() {
    // alert("you have clicked styling options");
    setStyle((prevState) => !prevState);
  }
  function pageSizeHandler() {
    //alert("you have clicked Size options");
    setSize((prevState) => !prevState);
  }
  function pageThemeHandler() {
    //alert("you have clicked Theme options");
    setTheme((prevState) => !prevState);
  }

  return (
    // <div className="home-container">
    //   <div className="menu-bar-container">
    //     <h1>menu</h1>
    //     <p>sfa</p>
    //   </div>
    //   <div className="page-item-container">
    //     <h1>page style cost</h1>
    //     <p>
    //       CSS Flexbox Layout Module Before the Flexbox Layout module, there were
    //     </p>
    //   </div>
    //   <div className="bill-container">
    //     <h1>bill page</h1>
    //   </div>
    // </div>
    <div className="   p-2 border-2 border-red-700 flex justify-around">
      <div className="  sticky top-60 h-60 px-2 w-1/4 m-1 border-2 border-green-600 ">
        <div className="p-2  flex justify-center flex-col">
          <button
            className="p-2 border-1 bg-green-400 m-2 rounded-md"
            onClick={pageStyleHandler}
          >
            Page style
          </button>
          <button
            className="p-2 border-1 bg-green-400 m-2 rounded-md"
            onClick={pageThemeHandler}
          >
            Page Theme
          </button>
          <button
            className="p-2 border-1 bg-green-400 m-2 rounded-md"
            onClick={pageSizeHandler}
          >
            Page size
          </button>
        </div>
      </div>
      <div className="p-2 sticky top-50 w-2/4 m-1 border-2 border-blue-600">
        {theme ? (
          <div>
            <h1>Page themes</h1>
            <Theme />
          </div>
        ) : (
          ""
        )}
        {size ? <h1>Page size</h1> : ""}
        {style ? (
          <div>
            <h1>Page style</h1>
            <Style />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" sticky top-60 p-2  w-1/4 h-auto m-1 border-2 border-blue-600">
        <h1 className="p-2  bg-red-300">Bill Summary</h1>
        <Bill className="relative h-1/2" />
      </div>
    </div>
  );
};

export default Home;
