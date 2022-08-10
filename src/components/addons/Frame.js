import React from "react";

import { formAction } from "../store/index";
import { useDispatch } from "react-redux";
import "./Frame.css";
var cssoptions = [
  {
    id: 1,
    option: "None  ",
    pc: 0,
  },
  {
    id: 2,
    option: "Bootstrap",
    pc: 10,
  },
];

const Framework = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = cssoptions.filter((data) => data.id == e.target.value);
      dispatch(
        formAction.putframedata({
          id: data[0].id,
          option: data[0].option,
          pc: data[0].pc,
        })
      );
    } else {
      let data = cssoptions.filter((data) => data.id == e.target.value);
      dispatch(formAction.deleteframedata({ id: data[0].id }));
    }
  };
  const frame = React.useRef();
  React.useEffect(() => {
    frame.current.focus();
  }, []);

  return (
    <React.Fragment>
      <div className="frame-container">
        <h5 className="frame-header">Framework customization</h5>
        {/* <div className="frame-note">
          <span>
            *** Note: we provide additional js functionality 3500 rupees per
            hour
          </span>
        </div> */}
        {cssoptions.map((data, id) => {
          return (
            <div className="frame-item-container " key={id}>
              <p className="frame-option-heading">{data.option}</p>
              <div className="frame-line">
                <div className="frame-line-style"></div>
              </div>

              <div className="frame-price-box-container">
                <input
                  type="checkbox"
                  value={data.id}
                  ref={frame}
                  onChange={changeHandler}
                ></input>
                <p>{data.pc == 0 ? "Included" : data.pc + " %"} </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Framework;
