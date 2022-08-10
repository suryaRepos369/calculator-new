import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { formAction } from "../store";

var compatibilityoptions = [
  {
    id: 1,
    option:
      "Compatible with and tested in/on Chrome ,Firefox, Safari, Edge, IOS 14+",
    pc: 0,
  },
  {
    id: 2,
    option: "Another /Older Browser",
    pc: 10,
  },
];
const Compatibility = () => {
  const dispatch = useDispatch();
  const res = React.useRef();
  React.useEffect(() => {
    res.current.focus();
  }, []);

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = compatibilityoptions.filter(
        (data) => data.id == e.target.value
      );
      // console.log(data, "data");

      dispatch(
        formAction.putcompoptdata({
          id: data[0].id,
          option: data[0].option,
          pc: data[0].pc,
        })
      );
    } else {
      let data = compatibilityoptions.filter(
        (data) => data.id == e.target.value
      );
      dispatch(
        formAction.deletecompoptdata({ id: data[0].id, cost: data[0].pc })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="addres-container">
        <h5 className="addres-header">Compatibility options</h5>

        {compatibilityoptions.map((data, id) => {
          return (
            <div className="addres-item-container " key={id}>
              <p className="addres-option-heading">{data.option}</p>
              <div className="addres-line">
                <div className="addres-line-style"></div>
              </div>

              <div className="addres-price-box-container">
                <input
                  type="radio"
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

export default Compatibility;
