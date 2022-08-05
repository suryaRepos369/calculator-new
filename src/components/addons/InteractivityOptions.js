import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { formAction } from "../store";
import { useSelector, useDispatch } from "react-redux";

var interactivityOptions = [
  {
    id: "1",
    option: "Standard interactivity pack",
    cost: 15,
  },
];
const InteractivityOptions = () => {
  const advData = useSelector((state) => state.dataSlice.advcss);
  console.log("advData:", advData);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    if (e.target.checked) {
      let data = interactivityOptions.filter(
        (data) => data.id == e.target.value
      );
      console.log(data, "data");

      dispatch(
        formAction.putintoptdata({
          id: data[0].id,
          option: data[0].option,
          cost: data[0].cost,
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
      <div className="p-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700">
        <h2 className="text-xl p-1 text-white  font-medium">
          Interactivity Options
        </h2>
        {interactivityOptions.map((data, id) => {
          return (
            <div
              className=" border-dotted border-y rounded-sm  border-sky-700 flex  mw-auto  p-1 justify-between bg-slate-400 "
              key={id}
            >
              <p className="text-black  font-medium ml-1">{data.option}</p>
              <div className="w-2/5">
                <div className="w-full flex-grow-0 mt-3 border-t border-blue-900 justify-center h-1"></div>
              </div>

              <div className="flex gap-2 ">
                <Checkbox value={data.id} onChange={changeHandler}></Checkbox>
                <p className="mt-2">
                  {data.cost} {data.cost == "Included" ? "" : "%"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default InteractivityOptions;
