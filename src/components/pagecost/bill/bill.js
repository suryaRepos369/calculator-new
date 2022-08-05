import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import "./bill.css";

import axios from "axios";
const billdata = {
  totalcost: 3534,
  pagesize: [
    {
      option: "S",
      price: 2342,
      eta: 3,
      qty: 1,
    },
    {
      option: "M",
      price: 5000,
      eta: 3,
      qty: 3,
    },
    {
      option: "L",
      price: 5000,
      eta: 3,
      qty: 3,
    },
  ],
  optimize: [
    {
      option: "Section 508 / WCAG",
      pc: 15,
    },
  ],
  responseive: {
    option: "I have One Resolution",
    pc: 10,
  },
  framework: {
    option: "Bootstrap",
    pc: 10,
  },
  layout: [
    {
      option: "Retina",
      pc: 0,
    },
    {
      option: "Google fonts",
      pc: 0,
    },
  ],
  additional_css_option: [
    {
      option: "advanced css3 animation",
      costPerHr: 45,
    },
  ],
  advanced_js_option: [
    {
      option: "React ",
      costPerHr: 45,
    },
  ],
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
  projectbrief: "This is the sample project for the React team ",
  attachment: "ugjkhgkjh",
  contact: {
    name: "anitha",
    email: "@tealorca.in",
    mobile: "2342398128",
  },
};
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

function paybuttonHandler() {
  postData(url, billdata).then((data) => {
    console.log("Submited data", data); // JSON data parsed by `data.json()` call
  });
}

export default function SpanningTable() {
  const advcssbill = useSelector((state) => state.dataSlice.advcss);
  console.log("advcssbill:", advcssbill);
  const intoptbill = useSelector((state) => state.dataSlice.intopt);

  const total = useSelector((state) => state.dataSlice.TotalCost);

  const addjsbill = useSelector((state) => state.dataSlice.addjs);
  const compbill = useSelector((state) => state.dataSlice.compopt);
  const pagesizebill = useSelector((state) => state.dataSlice.pagesize);
  console.log("pagesizebill:", pagesizebill);

  const selectedPage = pagesizebill.filter((data) => data.qty > 0);
  console.log("selectedPage:", selectedPage);

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  var item, cost, qty, pc;
  var page = [];
  selectedPage.map((data) => {
    item = data.type;
    cost = data.price;
    qty = data.qty;

    page.push({ desc: item, cost: cost, qty: qty, pc: 0 });
  });

  var intoptrows = [];
  var intoptflag = false;

  if (intoptbill.length > 0) {
    intoptflag = true;
    intoptbill.map((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      intoptrows.push({ desc: item, cost: cost, qty: qty, pc });
    });
  }

  var addjsflag = false;
  var rows = [];
  if (addjsbill.length > 0) {
    addjsflag = true;

    addjsbill.map((data) => {
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
    advcssbill.map((data) => {
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
    compbill.map((data) => {
      item = data.option;
      cost = data.cost;
      qty = data.qty;
      pc = data.pc;
      comprow.push({ desc: item, qty: qty, pc });
    });
  }

  let paylater = [addjsflag, advcssflag, compflag, intoptflag].some(
    (data) => data === true
  );
  if (paylater) {
    console.log("additional pay later");
  } else {
    console.log("deselected");
  }

  return (
    <React.Fragment>
      <div className="bill-container">
        <h2 className="table-container-heading">Order Summary</h2>

        <table className="table-container">
          <thead>
            <tr
              style={{
                border: "1px solid black ",
                padding: "2rem",
                backgroundColor: "skyblue",
                margin: "2rem",
              }}
            >
              <th>Description </th>
              <th>Quantity</th>
              <th>Cost/unit</th>
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
            {addjsflag && (
              <tr className="additional-js-heading">
                <td style={{ textAlign: "center" }} colSpan={4}>
                  Additional JS Functionality
                </td>
              </tr>
            )}
            {rows.map((data) => {
              return (
                <tr className="additional-js-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{data.pc} </td>
                  <td>{data.cost} </td>
                </tr>
              );
            })}
            {intoptflag && (
              <tr className="interactivity-heading">
                <td style={{ textAlign: "center" }} colSpan={4}>
                  Interactivity Options
                </td>
              </tr>
            )}
            {intoptrows.map((data) => {
              return (
                <tr className="interactivity-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{data.pc} </td>
                  <td>{data.cost} </td>
                </tr>
              );
            })}
            {advcssflag && (
              <tr className="advancedcss-heading">
                <td style={{ textAlign: "center" }} colSpan={4}>
                  Addvanced CSS Options
                </td>
              </tr>
            )}
            {advcssrow.map((data) => {
              return (
                <tr className="advancedcss-heading">
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
                <td style={{ textAlign: "center" }} colSpan={4}>
                  Compatibility options
                </td>
              </tr>
            )}
            {comprow.map((data) => {
              return (
                <tr className="comp-content">
                  <td>{data.desc} </td>
                  <td>{data.qty} </td>
                  <td>{data.pc} </td>
                  <td>{data.cost} </td>
                </tr>
              );
            })}

            <tr className="total-heading ">
              <td colSpan={4}>Total amount</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  padding: "10px",
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
