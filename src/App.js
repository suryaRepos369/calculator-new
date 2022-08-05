import "./App.css";
import Cost from "./components/addons/Cost";
import Form from "./components/form/Form";
import Formnew from "./components/form/Fromnew";
import AdditionalcssOptions from "./components/addons/AdditionalcssOptions";
import AdditionalJsFunctionality from "./components/addons/AdditionalJsFunctionality";
import Responsive from "./components/addons/Responsive";
import Optimize from "./components/addons/Optimize";
import Framework from "./components/addons/Frame";
import Layout from "./components/addons/Layout";
import Bill from "./components/pagecost/bill/bill";

import { useState } from "react";

function App() {
  const [responsive, setResponsive] = useState("");
  const [optFlag, setoptFlag] = useState(false);
  const [resFlag, setresFlag] = useState(false);
  const [layoutFlag, setlayoutFlag] = useState(false);
  const [optimize, setOptimize] = useState(false);
  const [frameFlag, setframeFlag] = useState(false);

  const [cssFlag, setCssflag] = useState(false);
  const [jsflag, setJsflag] = useState(false);
  const [intFlag, setIntflag] = useState(false);
  const [compflag, setCompflag] = useState(false);

  const optimizeHandler = () => setoptFlag((prev) => !prev);
  const responsiveHandler = () => setresFlag((prev) => !prev);
  const frameHandler = () => setframeFlag((prev) => !prev);
  const layoutHandler = () => setlayoutFlag((prev) => !prev);

  const cssHandler = () => setCssflag((prev) => !prev);
  const jsHandler = () => setJsflag((prev) => !prev);
  const intHandler = () => setIntflag((prev) => !prev);
  const compHandler = () => setCompflag((prev) => !prev);

  return (
    <div className="App">
      <div className="mother-container">
        <div className="app-menu">
          <div className="app-menu-heading ">
            Menu
            <div className="button-group">
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={cssHandler}
              >
                Responsiveness
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={cssHandler}
              >
                Optimization
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={cssHandler}
              >
                Framework
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={cssHandler}
              >
                Layout and Look
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={cssHandler}
              >
                Advanced CSS settings
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={jsHandler}
              >
                Additional JS settings
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={intHandler}
              >
                Interactivity Options
              </button>
              <button
                className="menu-button"
                variant="contained"
                color="inherit"
                onClick={compHandler}
              >
                Compatibility Options
              </button>
            </div>
          </div>
        </div>
        <div className="app-content">
          <div>Description</div>
          {/* <Form /> */}
          <Formnew />
          <Responsive />
          <Optimize />
          <Layout />
          <Framework />
          <AdditionalcssOptions />
          <AdditionalJsFunctionality />
        </div>
        <div className="app-bill">
          Bill summary
          <Bill />
        </div>
      </div>
    </div>
  );
}

export default App;
