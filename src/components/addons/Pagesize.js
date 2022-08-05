import React from "react";
import "./Pagesize.css";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { formAction } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const pagesize = [
  {
    id: 1,
    type: "XS",
    desc: "About Us (text page only), Terms of Use, Privacy Policy, Single Blog Post, 404 page, Other text pages",
    height: "<1500 px",
    price: 5000,
    eta: 3,
    qty: 1,
  },
  {
    id: 2,
    type: "S",
    desc: "About Us (beyond text page), FAQ, Contact Us, Testimonials, Our Team",
    height: "1500-2500 px",
    price: 6000,
    eta: 3,
    qty: 1,
  },
  {
    id: 3,
    type: "M",
    desc: "Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout",
    height: "2500-5000 px",
    price: 7000,
    eta: 3,
    qty: 1,
  },
  {
    id: 4,
    type: "L",
    desc: "Home Page, Product/Service, Landing Page, Dashboard, eCommerce: Product Listing.",
    height: "5000-10000 px",
    price: 8000,
    eta: 3,
    qty: 1,
  },
  {
    id: 5,
    type: "XL",
    desc: "Please specify your page size in pixels or just attach it to the request.",
    height: ">10000 px",
    price: 10000,
    eta: 3,
    qty: 1,
  },
];

const Pagesize = () => {
  const dispatch = useDispatch();
  const [sq, setSq] = useState(0);
  const [xsq, setXsq] = useState(0);
  const [mq, setMq] = useState(0);
  const [lq, setLq] = useState(0);
  const [xlq, setXlq] = useState(0);

  function pageIncrement(id, type, qty, cost) {
    console.log("id, type, qty, cost:", id, type, qty, cost);
    var f = pagesize.find((data) => data.id === id);
    f.qty = f.qty + 1;
    console.log("f.qty:", f.qty);
    dispatch(
      formAction.putpagesizedata({
        id: id,
        option: type,
        qty: qty,
        cost: cost,
      })
    );
  }
  function pageDecrement(data, dta) {
    console.log("page decrease clicked", data, dta);
  }
  var q = "s";

  return (
    <React.Fragment>
      <div className="border-3 w-50  border-red-500 rounded-md">
        <div className=" bg-blue-500 w-full rounded-lg p-2">
          <h2>Select the required page sizes</h2>
        </div>
        <div class="template-visuals">
          <ul className="w-full">
          
              
                <li  className="pagelist-container">
                  <div className="page-wrapper">
                    <div className="page-heading">
                      <span className="">{data.type}</span>
                    </div>
                    <div className="heading-desc">
                      <div>Examples</div>
                      <div>{data.desc}</div>
                    </div>
                    <div className="p-2 m-1 text-white bg-slate-600">
                      <div>Price</div>
                      <div className="text-green-600 text-lg">
                        ₹{data.price}
                      </div>
                      <div>ETA</div>
                      <div>{data.eta} days</div>
                    </div>
                    <div className="add-container">
                      <div className="m-1 text-white">Quantity</div>
                      <div></div>

                      <div>
                        <IconButton
                          onClick={() =>
                            pageIncrement(
                              data.id,

                              data.type,
                              data.qty,
                              data.price
                            )
                          }
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </div>
                      <div>
                        <input
                          className="bg-black w-10 rounded-md text-white"
                          value={q.concat(data.id)}
                          type="text"
                        ></input>
                      </div>
                      <div>
                        <IconButton
                          onClick={() => pageDecrement(data.type, data.qty)}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </li>
           
            {/* <li className="p-2 border-2 flex justify-between bg-green-500">
              <div class="title-holder">XS</div>
              <div class="description-holder">
                <div class="examples-holder">
                  <div class="title">Examples</div>
                  <p>
                    About Us (text page only), Terms of Use, Privacy Policy,
                    Single Blog Post, 404 page, Other text pages.
                    <br />
                    <b>E.G. Page Height &lt;1500</b>
                  </p>
                </div>
              </div>
              <div class="price-holder">
                <div class="title">Price</div>
                <div class="price"> $99 </div>
                <div class="title">ETA</div>
                <div class="eta">
                  <span class="tilda">~</span>2 business days
                </div>
              </div>
              <div class="quantity-holder">
                <div class="title">Quantity</div>{" "}
                <span class="jcf-number">
                  <input
                    type="number"
                    value="0"
                    data-qty="XS"
                    name="XS"
                    data-main-set=""
                    class="jcf-real-element"
                  />
                  <span class="jcf-btn-inc"></span>
                  <span class="jcf-btn-dec"></span>
                </span>
              </div>
            </li>
            <li className="p-2 border-2 flex justify-between bg-green-500">
              <div class="title-holder">XS</div>
              <div class="description-holder">
                <div class="examples-holder">
                  <div class="title">Examples</div>
                  <p>
                    About Us (text page only), Terms of Use, Privacy Policy,
                    Single Blog Post, 404 page, Other text pages.
                    <br />
                    <b>E.G. Page Height &lt;1500</b>
                  </p>
                </div>
              </div>
              <div class="price-holder">
                <div class="title">Price</div>
                <div class="price"> $99 </div>
                <div class="title">ETA</div>
                <div class="eta">
                  <span class="tilda">~</span>2 business days
                </div>
              </div>
              <div class="quantity-holder">
                <div class="title">Quantity</div>{" "}
                <span class="jcf-number">
                  <input
                    type="number"
                    value="0"
                    data-qty="XS"
                    name="XS"
                    data-main-set=""
                    class="jcf-real-element"
                  />
                  <span class="jcf-btn-inc"></span>
                  <span class="jcf-btn-dec"></span>
                </span>
              </div>
            </li>
            <li className="p-2 border-2 flex justify-between bg-green-500">
              <div class="title-holder">XS</div>
              <div class="description-holder">
                <div class="examples-holder">
                  <div class="title">Examples</div>
                  <p>
                    About Us (text page only), Terms of Use, Privacy Policy,
                    Single Blog Post, 404 page, Other text pages.
                    <br />
                    <b>E.G. Page Height &lt;1500</b>
                  </p>
                </div>
              </div>
              <div class="price-holder">
                <div class="title">Price</div>
                <div class="price"> $99 </div>
                <div class="title">ETA</div>
                <div class="eta">
                  <span class="tilda">~</span>2 business days
                </div>
              </div>
              <div class="quantity-holder">
                <div class="title">Quantity</div>{" "}
                <span class="jcf-number">
                  <input
                    type="number"
                    value="0"
                    data-qty="XS"
                    name="XS"
                    data-main-set=""
                    class="jcf-real-element"
                  />
                  <span class="jcf-btn-inc"></span>
                  <span class="jcf-btn-dec"></span>
                </span>
              </div>
            </li>
            <li className="p-2 border-2 flex justify-between bg-green-500">
              <div class="title-holder">XS</div>
              <div class="description-holder">
                <div class="examples-holder">
                  <div class="title">Examples</div>
                  <p>
                    About Us (text page only), Terms of Use, Privacy Policy,
                    Single Blog Post, 404 page, Other text pages.
                    <br />
                    <b>E.G. Page Height &lt;1500</b>
                  </p>
                </div>
              </div>
              <div class="price-holder">
                <div class="title">Price</div>
                <div class="price"> $99 </div>
                <div class="title">ETA</div>
                <div class="eta">
                  <span class="tilda">~</span>2 business days
                </div>
              </div>
              <div class="quantity-holder">
                <div class="title">Quantity</div>{" "}
                <span class="jcf-number">
                  <input
                    type="number"
                    value="0"
                    data-qty="XS"
                    name="XS"
                    data-main-set=""
                    class="jcf-real-element"
                  />
                  <span class="jcf-btn-inc"></span>
                  <span class="jcf-btn-dec"></span>
                </span>
              </div>
            </li>
            <li className="p-2 border-2 flex justify-between bg-green-500">
              <div class="title-holder">XS</div>
              <div class="description-holder">
                <div class="examples-holder">
                  <div class="title">Examples</div>
                  <p>
                    About Us (text page only), Terms of Use, Privacy Policy,
                    Single Blog Post, 404 page, Other text pages.
                    <br />
                    <b>E.G. Page Height &lt;1500</b>
                  </p>
                </div>
              </div>
              <div class="price-holder">
                <div class="title">Price</div>
                <div class="price"> $99 </div>
                <div class="title">ETA</div>
                <div class="eta">
                  <span class="tilda">~</span>2 business days
                </div>
              </div>
              <div class="quantity-holder">
                <div class="title">Quantity</div>{" "}
                <span class="jcf-number">
                  <input
                    type="number"
                    value="0"
                    data-qty="XS"
                    name="XS"
                    data-main-set=""
                    class="jcf-real-element"
                  />
                  <span class="jcf-btn-inc"></span>
                  <span class="jcf-btn-dec"></span>
                </span>
              </div>
            </li> */}
          </ul>
        </div>
      </div>{" "}
    </React.Fragment>
  );
};

export default Pagesize;
