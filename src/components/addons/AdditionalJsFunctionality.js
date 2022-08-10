import React from "react";
import { formAction } from "../store";
import { useDispatch } from "react-redux";
import "./AdditionalJsFunctionality.css";
const jsoptions = [
  {
    id: 1,
    option: "Angular",
    cost: 3500,
  },
  {
    id: 2,
    option: "D3",
    cost: 3500,
  },
  {
    id: 3,
    option: "jQuery",
    cost: 3500,
  },
  {
    id: 4,
    option: "Native JS",
    cost: 3500,
  },
  {
    id: 5,
    option: "jQuery UI",
    cost: 3500,
  },
];

const AdditionalJsFunctionality = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = jsoptions.filter((data) => data.id == e.target.value);
      console.log(data, "data");

      dispatch(
        formAction.putaddjsdata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].cost,
        })
      );
    } else {
      let data = jsoptions.filter((data) => data.id == e.target.value);
      dispatch(
        formAction.deleteaddjsdata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };
  React.useEffect(() => {
    js.current.focus();
  }, []);
  const js = React.useRef();
  return (
    <React.Fragment>
      <div className="addjs-container">
        <h5 className="addjs-header">Additional JS Functionality </h5>
        <div className="addjs-note">
          <span>
            *** Note: we provide additional js functionality 3500 rupees per
            hour
          </span>
        </div>
        {jsoptions.map((data, id) => {
          return (
            <div className="addjs-item-container " key={id}>
              <p className="addjs-option-heading">{data.option}</p>
              <div className="addjs-line">
                <div className="addjs-line-style"></div>
              </div>

              <div className="addjs-price-box-container">
                <input
                  type="checkbox"
                  value={data.id}
                  ref={js}
                  onChange={changeHandler}
                ></input>
                <p>{data.cost + "/Hr"} </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AdditionalJsFunctionality;
