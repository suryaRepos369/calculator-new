import { useSelector, useDispatch } from "react-redux";
import { formAction } from "../../store";
import * as React from "react";
import "./bill.css";

import axios from "axios";

var url = "http://192.168.0.168/Quotation-app/public/api/postapi";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function SpanningTable() {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.dataSlice.contact);
  // console.log("contact data", contact);

  const responsebill = useSelector((state) => state.dataSlice.response);

  const optimizebill = useSelector((state) => state.dataSlice.optimize);
  const layout = useSelector((state) => state.dataSlice.layout);
  const layoutfont = useSelector((state) => state.dataSlice.layoutfont);

  const framebill = useSelector((state) => state.dataSlice.framework);
  const advcssbill = useSelector((state) => state.dataSlice.advcss);
  const intoptbill = useSelector((state) => state.dataSlice.intopt);
  var t = useSelector((state) => state.dataSlice.TotalCost);

  var total = parseFloat(t).toFixed(1);
  const addjsbill = useSelector((state) => state.dataSlice.addjs);
  const compbill = useSelector((state) => state.dataSlice.compopt);
  const pagesizebill = useSelector((state) => state.dataSlice.pagesize);
  const selectedPage = pagesizebill.filter((data) => data.qty > 0);

  const contactflag = useSelector((state) => state.dataSlice.contactFlag);

  function paybuttonHandler() {
    if (total < 1) {
      alert("Please select any basic package to checkout");
    }
    if (total > 1 && !contact.length) {
      alert("please enter the contact details");
      dispatch(formAction.setcontactFlag(true));
    }
    if (total > 1 && contact.length) {
      alert("form submited");
    }
  }

  var item, cost, qty, pc;
  var page = [];
  selectedPage.forEach((data) => {
    item = data.type;
    cost = data.price;
    qty = data.qty;
    if (data.qty > 0) page.push({ desc: item, cost: cost, qty: qty, pc: 0 });
  });
  //!responsive data.....
  var resrows = [];
  var resflag = false;

  if (responsebill.length > 0) {
    resflag = true;
    responsebill.forEach((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      resrows.push({ desc: item, cost: cost, qty: qty, pc });
    });
  }

  //!optimize data.....
  var optimizerows = [];
  var optimizeflag = false;

  if (optimizebill.length > 0) {
    resflag = true;
    optimizebill.forEach((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = 23432;
      optimizerows.push({ desc: item, cost: cost, qty: qty, pc });
    });
  }
  //!framework data.....
  var framerows = [];
  // // var optimizeflag = false;
  // console.log("frame bill ", framebill);

  var framerows = [];
  framebill.forEach((data) => {
    resflag = true;
    framerows.push({
      desc: data.option,
      pc: data.pc,
      qty: data.qty,
    });
  });

  var intoptrows = [];
  var intoptflag = false;

  if (intoptbill.length > 0) {
    intoptflag = true;
    intoptbill.forEach((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      intoptrows.push({ desc: item, qty, pc });
    });
  }

  var addjsflag = false;
  var rows = [];
  if (addjsbill.length > 0) {
    addjsflag = true;

    addjsbill.forEach((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      rows.push({ desc: item, qty: qty, pc });
    });
  }

  var advcssflag = false;
  var advcssrow = [];
  if (advcssbill.length > 0) {
    advcssflag = true;
    advcssbill.forEach((data) => {
      item = data.option;
      qty = data.qty;
      pc = data.pc;
      advcssrow.push({ desc: item, qty: qty, pc });
    });
  }
  var compflag = false;
  var comprow = [];
  if (compbill.length > 0) {
    compflag = true;
    compbill.forEach((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      comprow.push({ desc: item, qty: qty, pc });
    });
  }

  let paylater = [
    addjsflag,
    resflag,
    optimizeflag,
    advcssflag,
    compflag,
    intoptflag,
  ].some((data) => data === true);

  const billdata = {
    totalcost: total,
    pagesize: page,
    optimize: optimizerows,
    responseive: resrows,
    layout: [layout, layoutfont],
    additional_css_option: advcssrow,
    advanced_js_option: rows,
    interactivity_option: [
      {
        option: "Standard interactivity_option",
        cost: 43,
        pc: 12,
        qty: 1,
      },
    ],
    compatibility_option: [
      {
        option: "Another/older browser",
        pc: 12,
        qty: 1,
      },
    ],
    projectbrief: contact.brief,
    attachment: "ugjkhgkjh",
    contact: [contact.name, contact.email, contact.mobile],
  };
  // console.log("billdata", billdata);

  return (
    <React.Fragment>
      <div className="bill-container">
        <h2 className="table-container-heading">Order Summary</h2>

        <table className="table-container">
          <thead>
            <tr>
              <th>Desc </th>
              <th>Qty</th>
              <th>unit</th>
              <th> %</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {page.map((data, id) => {
              return (
                <tr key={id} className="additional-js-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>

                  <td>{data.cost} </td>
                  <td>{"-"} </td>
                  <td>{data.qty * data.cost}</td>
                </tr>
              );
            })}
            {paylater && (
              <tr className="Addition options to be billed later">
                <td
                  style={{ textAlign: "center", backgroundColor: "grey" }}
                  colSpan={5}
                >
                  Addition options to be billed later
                </td>
              </tr>
            )}

            {framerows.map((data, id) => {
              if (data.pc != 0) {
                return (
                  <tr key={id} className="additional-js-content">
                    <td>{data.desc} </td>
                    <td>{data.qty} </td>

                    <td>{"-"} </td>
                    <td>{data.pc} %</td>
                    <td>{(data.pc / 100) * total} </td>
                  </tr>
                );
              }
            })}
            {resrows.map((data, id) => {
              if (data.pc > 0) {
                return (
                  <tr key={id} className="additional-js-content">
                    <td>{data.desc} </td>
                    <td>{data.qty} </td>

                    <td>{"-"} </td>
                    <td>{data.pc} %</td>
                    <td>{(data.pc / 100) * total} </td>
                  </tr>
                );
              }
            })}

            {addjsflag && (
              <tr className="additional-js-heading">
                <td style={{ textAlign: "center" }} colSpan={5}>
                  Additional JS Functionality
                </td>
              </tr>
            )}
            {rows.map((data, id) => {
              return (
                <tr key={id} className="additional-js-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{data.pc + "/Hr"} </td>
                  <td>{"-"} </td>
                  <td>{"-"} </td>
                </tr>
              );
            })}

            {optimizerows.map((data, id) => {
              return (
                <tr key={id} className="additional-js-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{678678 + "%"} </td>
                  <td>{data.cost} </td>
                </tr>
              );
            })}
            {intoptflag && (
              <tr className="interactivity-heading">
                <td style={{ textAlign: "center" }} colSpan={5}>
                  Interactivity Options
                </td>
              </tr>
            )}
            {intoptrows.map((data, id) => {
              return (
                <tr key={id} className="interactivity-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{"-"} </td>
                  <td>{data.pc + "%"} </td>
                  <td>{(data.pc / 100) * total}</td>
                </tr>
              );
            })}
            {advcssflag && (
              <tr className="advancedcss-heading">
                <td style={{ textAlign: "center" }} colSpan={5}>
                  Addvanced CSS Options
                </td>
              </tr>
            )}
            {advcssrow.map((data, id) => {
              return (
                <tr key={id} className="advancedcss-heading">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{data.pc + "/Hr"} </td>
                  <td>{"-"} </td>
                  <td>{"-"} </td>
                </tr>
              );
            })}
            {compflag && (
              <tr className="comp-heading">
                <td style={{ textAlign: "center" }} colSpan={5}>
                  Compatibility options
                </td>
              </tr>
            )}
            {comprow.map((data, id) => {
              if (data.pc > 0) {
                return (
                  <tr key={id} className="comp-content">
                    <td>{data.desc} </td>
                    <td>{data.qty} </td>
                    <td>{"-"} </td>
                    <td>{data.pc + "%"} </td>
                    <td>{(data.pc / 100) * total} </td>
                  </tr>
                );
              }
            })}

            <tr className="total-heading ">
              <td colSpan={4}>Total amount</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  padding: "3px",
                }}
                colSpan={5}
              >
                <button className="pay-button" onClick={paybuttonHandler}>
                  Pay
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
