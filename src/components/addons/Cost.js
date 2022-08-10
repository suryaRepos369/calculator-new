import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import Bill from "../pagecost/bill/bill";
import { useSelector, useDispatch } from "react-redux";
import { formAction, fromAction } from "../store/index";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
import AdditionalcssOptions from "./AdditionalcssOptions";
import AdditionalJsFunctionality from "./AdditionalJsFunctionality";
import InteractivityOptions from "./InteractivityOptions";
import Compatibility from "./Compatibility";
import ProjectBrief from "./ProjectBrief";
import Form from "../form/Form";
import Menu from "../menu/Menu";
import "../form/form.css";
//import Pagesize from "./Pagesize";
import Responsive from "./Responsive";
import Optimize from "./Optimize";
import Frame from "./Frame";
import "./cost.css";
const Cost = () => {
  var optcost = 500;

  var res1 = 500;
  var res2 = 1000;
  var res3 = 1500;
  var Total = 0;
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

  function handleResponsiveRadioHandler(e) {
    setResponsive(e.target.value);
    // dispatch(formAction.putResdata(e.target.value));
  }

  const optimizeHandler = () => setoptFlag((prev) => !prev);
  const responsiveHandler = () => setresFlag((prev) => !prev);
  const frameHandler = () => setframeFlag((prev) => !prev);
  const layoutHandler = () => setlayoutFlag((prev) => !prev);

  const cssHandler = () => setCssflag((prev) => !prev);
  const jsHandler = () => setJsflag((prev) => !prev);
  const intHandler = () => setIntflag((prev) => !prev);
  const compHandler = () => setCompflag((prev) => !prev);

  function optAdd() {
    setOptimize((prev) => !prev);
  }

  return (
    <div className="all-component-container">
      <div className="menu-container">
        <h3 className="menu-header">Menu</h3>
       
      </div>
      <div className="component-container">
        <div>
          <h1 className="p-3 text-white text-2xl">Website features</h1>
          <div className="options-group">
            {/* <Pagesize /> */}
            <div>
              <Form />
            </div>
            <Responsive />
            <Optimize />
            <Frame />

            <div className="bg-white"></div>
            {cssFlag && (
              <div className="">
                <AdditionalcssOptions />
              </div>
            )}
            {jsflag && (
              <div>
                <AdditionalJsFunctionality />
              </div>
            )}
            {intFlag && (
              <div>
                <InteractivityOptions />
              </div>
            )}
            {compflag && (
              <div>
                <Compatibility />
              </div>
            )}
            <div>
              <ProjectBrief />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bill-summary-container">
        <Bill />
      </div>
    </div>
  );
};

export default Cost;
