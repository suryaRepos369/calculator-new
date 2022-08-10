import React from "react";

import { formAction } from "../store/index";
import { useDispatch } from "react-redux";
import "./AdditionalcssOptions.css";
var cssoptions = [
  {
    id: 1,
    option: "Advanced CSS3 Animation",
    cost: 3500,
  },
  {
    id: 2,
    option: "Advanced Parallax",
    cost: 3500,
  },
  {
    id: 3,
    option: "Google maps",
    cost: 3500,
  },
];

const AdditionalcssOptions = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = cssoptions.filter((data) => data.id == e.target.value);
      console.log(data, "data");

      dispatch(
        formAction.putadvcssdata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].cost,
        })
      );
    } else {
      let data = cssoptions.filter((data) => data.id == e.target.value);
      dispatch(
        formAction.deleteadvcssdata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };

  const css = React.useRef();
  React.useEffect(() => {
    css.current.focus();
  }, []);
  return (
    <React.Fragment>
      <div className="addcss-container">
        <h5 className="addcss-header">Advanced CSS options</h5>
        <div className="addcss-note">
          <span>
            *** Note: we provide additional js functionality 3500 rupees per
            hour
          </span>
        </div>
        {cssoptions.map((data, id) => {
          return (
            <div className="addcss-item-container " key={id}>
              <p className="addcss-option-heading">{data.option}</p>
              <div className="addcss-line">
                <div className="addcss-line-style"></div>
              </div>

              <div className="addcss-price-box-container">
                <input
                  type="checkbox"
                  value={data.id}
                  ref={css}
                  onChange={changeHandler}
                ></input>
                <p>{data.cost + "/Hr"} </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
      <div className="p-2 bg-slate-300">
        <h3 className="p-1 text-2xl">Advanced CSS/JS functionality</h3>
        {cssoptions.map((data, id) => {
          return (
            <div
              className=" border-dotted border-y rounded-sm  border-sky-700 flex  mw-auto  p-1 justify-between bg-slate-400 "
              key={id}
            >
              <p>{data.option}</p>
              <div className="w-3/5">
                <div className="w-full flex-grow-0 mt-3 border-t border-blue-900 justify-center h-1"></div>
              </div>

              <div className="flex gap-2 ">
                <input
                  type="checkbox"
                  value={data.id}
                  onChange={changeHandler}
                ></input>
                <p>{data.cost} %</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </React.Fragment>
  );
};

export default AdditionalcssOptions;
