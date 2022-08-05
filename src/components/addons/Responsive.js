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

const Responsive = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = resoptions.filter((data) => data.id == e.target.value);
      console.log(data, "data");

      dispatch(
        formAction.putaddjsdata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].cost,
        })
      );
    } else {
      let data = resoptions.filter((data) => data.id == e.target.value);
      dispatch(
        formAction.deleteaddjsdata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="addres-container">
        <h3 className="addres-header">Responsiveness</h3>
        {/* <div className="addres-note">
          <span>
            *** Note: we provide additional js functionality 3500 rupees per
            hour
          </span>
        </div> */}
        {resoptions.map((data, id) => {
          return (
            <div className="addres-item-container " key={id}>
              <p className="addres-option-heading">{data.option}</p>
              <div className="addres-line">
                <div className="addres-line-style"></div>
              </div>

              <div className="addres-price-box-container">
                <input
                  type="checkbox"
                  value={data.id}
                  onChange={changeHandler}
                ></input>
                <p>{data.pc} % </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="p-1 bg-gradient-to-r from-slate-800 to-slate-700">
        <h3 className="p-1 text-2xl text-white  bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
          Responsiveness
        </h3>
        {jsoptions.map((data, id) => {
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
    </React.Fragment>
  );
};

export default Responsive;
