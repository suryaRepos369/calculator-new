import React from "react";
import "./formnew.css";
import { useSelector, useDispatch } from "react-redux";
import { formAction } from "../store";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";

const Fromnew = () => {
  const page = useSelector((state) => state.dataSlice.pagesize);
  const dispatch = useDispatch();

  function pageIncrement(id) {
    dispatch(formAction.incrementPagedata(id));
  }
  function pageDecrement(id) {
    dispatch(formAction.decrementPagedata(id));
  }

  return (
    <React.Fragment>
      <div className="all-container">
        {page.map((data, id) => (
          <div key={id} className="page-container">
            <div className="page-tile">
              {/* <h1>XS</h1> */}
              <h1>{data.type}</h1>
            </div>
            <div className="page-description">
              <div className="page-description-title">Examples</div>
              {/* <span className="page-description-text1">
              Portfolio Grid, Case Study, Blog page, Services, eCommerce:
              Product Page, Account, Cart, Checkout.
            </span> */}
              <span>{data.desc}</span>
              <div className="page-description-text2">{data.height}</div>
            </div>
            <div className="page-price-eta-container">
              <span>Price</span>
              <div style={{ color: "red" }}>₹ {data.price}</div>
              <div className="pageselectpriceoptionETA">
                <span>ETA</span>
                <span>~{data.eta}Days</span>
              </div>
            </div>
            <div className="page-add-del-container">
              <div>
                {/* {" "}
                <button onClick={() => pageIncrement(data.id)}>
                
                </button> */}
                <IconButton
                  color="primary"
                  disableFocusRipple={true}
                  onClick={() => pageIncrement(data.id)}
                >
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div>
                {" "}
                <input type="text" readOnly={true} value={data.qty}></input>
              </div>{" "}
              <div>
                {/* <button
                  disabled={data.qty == 0 ? true : false}
                  onClick={() => pageDecrement(data.id)}
                >
                  <RemoveCircleIcon />
                </button> */}
                <IconButton
                  color="error"
                  disabled={data.qty == 0 ? true : false}
                  onClick={() => pageDecrement(data.id)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Fromnew;
