import React from "react";
import "./formnew.css";
import { useSelector, useDispatch } from "react-redux";
import { formAction } from "../store";

const Fromnew = () => {
  const page = useSelector((state) => state.dataSlice.pagesize);
  const dispatch = useDispatch();
  console.log("page:", page);

  function pageIncrement(id) {
    dispatch(formAction.incrementPagedata(id));
  }
  function pageDecrement(id) {
    dispatch(formAction.decrementPagedata(id));
  }

  return (
    <React.Fragment>
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
            <div style={{ color: "red", fontWeight: "bold" }}>
              ₹ {data.price}
            </div>
            <div className="pageselectpriceoptionETA">
              <span>ETA</span>
              <span>~{data.eta} Business Days</span>
            </div>
          </div>
          <div className="page-add-del-container">
            <div>
              {" "}
              <button onClick={() => pageIncrement(data.id)}>Add</button>
            </div>
            <div>
              {" "}
              <input type="text" readOnly={true} value={data.qty}></input>
            </div>{" "}
            <div>
              <button
                disabled={data.qty == 0 ? true : false}
                onClick={() => pageDecrement(data.id)}
              >
                Del
              </button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Fromnew;
