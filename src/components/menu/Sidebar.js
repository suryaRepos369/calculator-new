import React from "react";
import PinchIcon from "@mui/icons-material/Pinch";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import "./Sidebar.css";

var fsd = () => console.log("clicked");
const sidebarData = [
  {
    title: "Responsive",
    icon: <PinchIcon />,
    function: { fsd },
  },
  {
    title: "Responsive",
    icon: <PinchIcon />,
    function: { fsd },
  },
  {
    title: "Responsive",
    icon: <PinchIcon />,
    function: { fsd },
  },
];

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebarlist">
          {sidebarData.map((data, key) => {
            return (
              <li key={key} className="row">
                <div id="icon" onClick={fsd}>
                  {data.icon}
                </div>
                <div id="title">{data.title}</div>
              </li>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
