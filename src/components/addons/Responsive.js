import React from "react";
import { formAction } from "../store";
import { useDispatch } from "react-redux";
import "./Responsive.css";
const resoptions = [
  {
    id: 1,
    option: "At Tealorca's discretion",
    pc: 0,
  },
  {
    id: 2,
    option: "I have One Resolution",
    pc: 10,
  },
  {
    id: 3,
    option: "I have two Resolution",
    pc: 20,
  },
  {
    id: 4,
    option: "3 or more Resolution",
    pc: 30,
  },
];

const Responsive = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const res = React.useRef();
  React.useEffect(() => {
    res.current.focus();
  }, []);

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = resoptions.filter((data) => data.id == e.target.value);
      // console.log(data, "data");

      dispatch(
        formAction.putresponsedata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].pc,
        })
      );
    } else {
      let data = resoptions.filter((data) => data.id == e.target.value);
      dispatch(
        formAction.deleteresponsedata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="addres-container">
        <h5 className="addres-header">Responsiveness</h5>

        {resoptions.map((data, id) => {
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
});

export default Responsive;
