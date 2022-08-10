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
import InteractivityOptions from "./components/addons/InteractivityOptions";
import Compatibility from "./components/addons/Compatibility";
import Bill from "./components/pagecost/bill/bill";
import PinchIcon from "@mui/icons-material/Pinch";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import React from "react";
import { useState, useRef } from "react";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { fontSize } from "@mui/system";
import Project from "./components/projectBrief/Project";
function App() {
  const [optFlag, setoptFlag] = useState(false);
  const [resFlag, setresFlag] = useState(false);
  const [layoutFlag, setlayoutFlag] = useState(false);
  const [frameFlag, setframeFlag] = useState(false);

  const [cssFlag, setCssflag] = useState(false);
  const [jsflag, setJsflag] = useState(false);
  const [intFlag, setIntflag] = useState(false);
  const [compflag, setCompflag] = useState(false);

  const optimizeHandler = () => setoptFlag((prev) => !prev);
  const responsiveHandler = () => {
    setresFlag((prev) => !prev);
  };
  const frameHandler = () => setframeFlag((prev) => !prev);
  const layoutHandler = () => setlayoutFlag((prev) => !prev);

  const cssHandler = () => setCssflag((prev) => !prev);
  const jsHandler = () => setJsflag((prev) => !prev);
  const intHandler = () => setIntflag((prev) => !prev);
  const compHandler = () => setCompflag((prev) => !prev);

  return (
    <React.Fragment>
      <div id="navbar">
        <a className="active">Home</a>
      </div>
      <div className="content">
        <div className="container">
          <div className="row row-cols-2">
            <div className="fixed-left col left ">
              <div style={{ color: "red", fontWeight: 600, fontSize: "40px" }}>
                <MenuOpenIcon />
              </div>
              <div className="sidebar">
                <div className="sidebarlist">
                  <li className="row">
                    <div id="icon">
                      <PinchIcon />
                    </div>
                    <div id="title" onClick={responsiveHandler}>
                      Responsive
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      <FilterFramesIcon />
                    </div>
                    <div id="title" onClick={optimizeHandler}>
                      Optimization
                    </div>
                  </li>

                  <li className="row">
                    <div id="icon">
                      <DisplaySettingsIcon />
                    </div>
                    <div id="title" onClick={frameHandler}>
                      Framework
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      <FitScreenIcon />
                    </div>
                    <div id="title" onClick={layoutHandler}>
                      Layout and Look{" "}
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      {/* <DisplaySettingsIcon /> */}
                      <ViewCarouselIcon />
                    </div>
                    <div id="title" onClick={cssHandler}>
                      Advanced CSS{" "}
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      <WhatshotIcon />
                    </div>
                    <div id="title" onClick={jsHandler}>
                      Additional JS
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      <DisplaySettingsIcon />
                    </div>
                    <div id="title" onClick={intHandler}>
                      Interactivity
                    </div>
                  </li>
                  <li className="row">
                    <div id="icon">
                      <SettingsAccessibilityIcon />
                    </div>
                    <div id="title" onClick={compHandler}>
                      Compatibility Options
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="col main  ">
              <Formnew />
              {resFlag && <Responsive />}
              {optFlag && <Optimize />}
              {layoutFlag && <Layout />}
              {frameFlag && <Framework />}
              {cssFlag && <AdditionalcssOptions />}
              {jsflag && <AdditionalJsFunctionality />}
              {intFlag && <InteractivityOptions />}
              {compflag && <Compatibility />}
              <Project />
            </div>

            <div className="col right">
              <LocalMallIcon />
              <Bill />{" "}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// <div className="col ">
// <div
//   style={{
//     color: "red",
//     fontSize: "40px",
//     fontWeight: "700",
//     justifyContent: "center",
//   }}
// >
//   Menu
// </div>
// <div className="button-group">
//   <button
//     className="menu-button"
//     variant="contained"
//     onClick={responsiveHandler}
//   >
//     Responsiveness
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={optimizeHandler}
//   >
//     Optimization
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={frameHandler}
//   >
//     Framework
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={layoutHandler}
//   >
//     Layout and Look
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={cssHandler}
//   >
//     Advanced CSS settings
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={jsHandler}
//   >
//     Additional JS settings
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={intHandler}
//   >
//     Interactivity Options
//   </button>
//   <button
//     className="menu-button"
//     variant="contained"
//     color="inherit"
//     onClick={compHandler}
//   >
//     Compatibility Options
//   </button>
// </div>
// </div>

{
  /* <div className="col app-menu-heading ">
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

<div className="col main">
<div>Description</div>
{/* <Form /> */
}
{
  /* <Formnew />
<Responsive />
<Optimize />
<Layout />
<Framework />
<AdditionalcssOptions />
<AdditionalJsFunctionality />
</div>

<div className="col right">
Bill summary
<Bill />
</div> */
}
