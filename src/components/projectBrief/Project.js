import React from "react";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Fromik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Project.css";
import { useFormik } from "formik";

import { formAction } from "../store";
import { useDispatch, useSelector } from "react-redux";

const ProjectBrief = () => {
  const dispatch = useDispatch();
  const contflag = useSelector((state) => state.dataSlice.contactFlag);
  const emailref = React.useRef();

  //emailref.current.focus();

  var phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    brief: yup.string(),

    mobile: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      brief: "",
    },
    onSubmit: (values) => {
      console.log("form values", values);
      dispatch(
        formAction.putcontactdata({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          brief: values.brief,
        })
      );
    },
    validationSchema: validationSchema,
  });

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
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Project Brief</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name="brief"
            rows="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        <div class="form-group row" id="inputFocus">
          <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              name="email"
              ref={emailref}
              class="form-control"
              id="inputPassword3"
              placeholder="Enter the mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            {/* <ErrorMessage className="errorMsg" name="email"></ErrorMessage> */}
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              name="name"
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder="Enter the Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}

            {/* <ErrorMessage className="errorMsg" name="name"></ErrorMessage> */}
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="inputname" class="col-sm-2 col-form-label">
            Contact Number
          </label>
          <div class="col-sm-10">
            <input
              name="mobile"
              class="form-control"
              type="text"
              id="inputmobile"
              onBlur={formik.handleBlur}
              placeholder="Mobile Number"
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />
            {formik.errors.mobile ? (
              <div className="error">{formik.errors.mobile}</div>
            ) : null}

            {/* <ErrorMessage className="errorMsg" name="mobile"></ErrorMessage> */}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Continue to pay
        </button>
      </form>
    </React.Fragment>
  );
};

export default ProjectBrief;
