import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { formAction } from "../store";
import { useSelector, useDispatch } from "react-redux";

var interactivityOptions = [
  {
    id: "1",
    option: "Standard interactivity pack",
    pc: 15,
  },
];
const InteractivityOptions = () => {
  const res = React.useRef();
  React.useEffect(() => {
    res.current.focus();
  }, [res]);
  const advData = useSelector((state) => state.dataSlice.advcss);
  // console.log("advData:", advData);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = interactivityOptions.filter(
        (data) => data.id == e.target.value
      );
      // console.log(data, "data");

      dispatch(
        formAction.putintoptdata({
          id: data[0].id,
          option: data[0].option,
          pc: data[0].pc,
        })
      );
    } else {
      let data = interactivityOptions.filter(
        (data) => data.id == e.target.value
      );
      dispatch(
        formAction.deleteintoptdata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="addres-container">
        <h5 className="addres-header">Interactivity Options</h5>

        {interactivityOptions.map((data, id) => {
          return (
            <div className="addres-item-container " key={id}>
              <p className="addres-option-heading">{data.option}</p>
              <div className="addres-line">
                <div className="addres-line-style"></div>
              </div>

              <div className="addres-price-box-container">
                <input
                  type="checkbox"
                  id="input"
                  name="responseRadio"
                  ref={res}
                  value={data.id}
                  onChange={changeHandler}
                ></input>
                <p id="text">{data.pc} % </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default InteractivityOptions;
