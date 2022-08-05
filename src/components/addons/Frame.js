import React from "react";

import { formAction } from "../store/index";
import { useDispatch } from "react-redux";
import "./Frame.css";
var cssoptions = [
  {
    id: 1,
    option: "None  ",
    cost: 0,
  },
  {
    id: 2,
    option: "Bootstrap",
    cost: 10,
  },
];

const Framework = () => {
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

  return (
    <React.Fragment>
      <div className="frame-container">
        <h3 className="frame-header">Framework customization</h3>
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
                  onChange={changeHandler}
                ></input>
                <p>{data.cost == 0 ? "Included" : data.cost + " %"} </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
      <div className="p-1 bg-gradient-to-r from-slate-800 to-slate-700">
        <h3 className="p-1 text-2xl text-white  bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
          Framework
        </h3>
        {cssoptions.map((data, id) => {
          return (
            <div
              className=" border-dotted border-y rounded-sm  border-sky-700 flex  mw-auto  p-1 justify-between bg-slate-400 "
              key={id}
            >
              <p className="text-black font-medium  ml-2">{data.option}</p>
              <div className="w-4/5">
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

export default Framework;
