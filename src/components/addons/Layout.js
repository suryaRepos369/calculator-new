import React from "react";
import "./Layout.css";

import { formAction } from "../store/index";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  const res = React.useRef();
  React.useEffect(() => {
    res.current.focus();
  }, [res]);
  function changeHandler() {}

  function selectHandler(e) {
    console.log(e.target.value);
    dispatch(
      formAction.putlayoutfontdata({
        id: 1,
        qty: 1,
        option: e.target.value,
      })
    );
  }

  return (
    <React.Fragment>
      <div className="layout-container">
        <h5 className="layout-header">Layout and Look </h5>
        {/* <div className="layout-note">
          <span>
            *** Note: we provide additional js functionality 3500 rupees per
            hour
          </span>
        </div> */}

        <div className="layout-item-container ">
          <p className="layout-option-heading">Retina</p>
          <div className="layout-line">
            <div className="layout-line-style"></div>
          </div>

          <div className="layout-price-box-container">
            <input
              type="checkbox"
              value={7}
              checked={true}
              onChange={changeHandler}
            ></input>
            <p>Included</p>
          </div>
        </div>
        <div className="layout-item-container ">
          <p className="layout-option-heading">Font style </p>
          <div className="layout-line">
            <div className="layout-line-style"></div>
          </div>

          <div className="layout-price-box-container">
            <select
              name="fonts"
              ref={res}
              className="font"
              onChange={selectHandler}
            >
              <option>@font-face</option>
              <option>Typekit</option>
              <option>Google fonts</option>
              <option>Fonts.com</option>
            </select>
          </div>
        </div>
      </div>

      {/* <div class="p-2 flex-row justify-between border-2  bg-slate-500">
        <h3 className="p-2 mx-2 bg-blue-500">Layout and Look</h3>
        <ul
          class="flex justify-center border-2  bg-slate-500"
          data-percent-option="responsive"
        >
          <li className="p-2  flex justify-between bg-inherit">
            <label class="jsf-label-active jcf-label-active">
              <span class="name">Retina </span>

              <span class="side-area">
                <span class="jcf-checkbox jcf-checked">
                  <span></span>
                  <input
                    className="flex relative  w-full m-0"
                    name="retina"
                    type="checkbox"
                    checked={true}
                    // style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;"
                  />
                </span>
                <strong class="option-price">Included</strong>
              </span>
            </label>
          </li>
          <li className="p-2  flex justify-between bg-inherit">
            <label class="jsf-label-active">
              <span class="name-area">
                {" "}
                <span class="name">Fonts</span>{" "}
              </span>
              <span class="side-area">
                <select name="fonts" class="jcf-hidden">
                  <option>@font-face</option>
                  <option>Typekit</option>
                  <option>Google fonts</option>
                  <option>Fonts.com</option>
                </select>
                <span class="jcf-select jcf-unselectable">
                  <span class="jcf-select-text">
                    <span class="">@font-face</span>
                  </span>
                  <span class="jcf-select-opener"></span>
                </span>
                <strong class="option-price">Included</strong>
              </span>
            </label>
          </li>
        </ul>
      </div> */}
    </React.Fragment>
  );
};

export default Layout;
