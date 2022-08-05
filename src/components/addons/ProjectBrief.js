import React from "react";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  number: yup.number().min(10).max(10).positive().integer().required(),
});

const ProjectBrief = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobile, setEnteredMobile] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredMobile]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setEnteredMobile(event.target.value);
  };

  // const validateEmailHandler = () => {
  //   //setEmailIsValid(enteredEmail.includes("@"));
  //   userSchema.isValid({
  //     name: enteredEmail,
  //     name: enteredName,
  //     mobile: enteredMobile,
  //   }).then((res)=>(console.log(res))).

  function validateEmailHandler() {}

  function readFile(file) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const result = event.target.result;
      // Do something with result
    });

    reader.addEventListener("progress", (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100;
        console.log(`Progress: ${Math.round(percent)}`);
      }
    });
    reader.readAsDataURL(file);
  }

  return (
    <React.Fragment>
      <div className="border-1  bg-inherit mw-full h-500">
        <div className="p-2 bg-inherit ">
          <h2 className="p-2 text-xl  bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
            Project Brief
          </h2>

          <TextField
            className="w-full bg-slate-200 text-white"
            id="outlined-multiline-static"
            label="About the project"
            multiline
            rows={5}
            defaultValue=""
          />
        </div>
        <div className="flex  justify-center">
          <div className="  m-1 rounded-lg p-1  h-47 w-1/2  bg-slate-700">
            <h3 className=" p-1  w-auto m-1  border-black bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
              Attachments
            </h3>

            <div className="flex-col justify-about">
              <input
                className="text-white p-1 m-3 bg-slate-500 rounded-lg "
                type="file"
              ></input>
              <Stack direction="row" spacing={6}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Stack>
            </div>
          </div>
          <div className="h-55 w-1/2 m-1  bg-slate-600  rounded-lg border-3 border-slate-100">
            <h3 className="border-1 m-1 p-1 bg-gradient-to-r from-red-600 to-slate-900 text-white rounded-lg">
              Contact details
            </h3>

            <div className="flex-row  flex-shrink">
              <input
                className="p-1 border-1 m-2  border-x-black rounded-lg"
                type="text"
                placeholder="Enter ur name"
              ></input>
              <input
                className="p-1 border-1 m-2  border-x-black rounded-lg"
                type="mail"
                placeholder="Enter Email address"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              ></input>
              <input
                className="p-1 border-1 m-2  border-x-black rounded-lg"
                type="number"
                placeholder="Enter mobile"
                onChange={numberChangeHandler}
                onBlur={validateEmailHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectBrief;
