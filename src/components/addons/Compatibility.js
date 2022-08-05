import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { formAction } from "../store";

var compatibilityoptions = [
  {
    id: 1,
    option:
      "Compatible with and tested in/on Chrome ,Firefox, Safari, Edge, IOS 14+",
    cost: 0,
  },
  {
    id: 2,
    option: "Another /Older Browser",
    cost: 10,
  },
];
const Compatibility = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = compatibilityoptions.filter(
        (data) => data.id == e.target.value
      );
      console.log(data, "data");

      dispatch(
        formAction.putcompoptdata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].cost,
        })
      );
    } else {
      let data = compatibilityoptions.filter(
        (data) => data.id == e.target.value
      );
      dispatch(
        formAction.deletecompoptdata({ id: data[0].id, cost: data[0].cost })
      );
    }
  };

  return (
    <React.Fragment>
      <div className="p-1 p-1 bg-gradient-to-r from-slate-800 to-slate-700">
        <h2 className="p-2 text-xl text-white  bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
          Compatibility Options
        </h2>
        {compatibilityoptions.map((data, id) => {
          return (
            <div
              className=" border-dotted border-y rounded-sm  border-sky-700 flex  mw-auto  p-1 justify-between bg-slate-400 "
              key={id}
            >
              <p>{data.option}</p>
              <div className="w-1/5">
                <div className="w-full flex-grow-0 mt-3 border-t border-blue-900 justify-center h-1"></div>
              </div>

              <div className="flex flex-shrink  justify-evenlyw-2/5 gap-2 ">
                <Checkbox value={data.id} onChange={changeHandler}></Checkbox>
                <p className="mt-3">
                  {data.cost} {data.cost == 0 ? "Included" : ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Compatibility;
