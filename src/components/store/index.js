import { createSlice, configureStore } from "@reduxjs/toolkit";

const formdata = createSlice({
  name: "dataslice",
  initialState: {
    TotalCost: 0,
    pagesize: [
      {
        id: 1,
        type: "XS",
        desc: "About Us (text page only), Terms of Use, Privacy Policy, Single Blog Post, 404 page, Other text pages",
        height: "<1500 px",
        price: 5000,
        eta: 3,
        qty: 0,
      },
      {
        id: 2,
        type: "S",
        desc: "About Us (beyond text page), FAQ, Contact Us, Testimonials, Our Team",
        height: "1500-2500 px",
        price: 6000,
        eta: 3,
        qty: 0,
      },
      {
        id: 3,
        type: "M",
        desc: "Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout",
        height: "2500-5000 px",
        price: 7000,
        eta: 3,
        qty: 0,
      },
      {
        id: 4,
        type: "L",
        desc: "Home Page, Product/Service, Landing Page, Dashboard, eCommerce: Product Listing.",
        height: "5000-10000 px",
        price: 8000,
        eta: 3,
        qty: 0,
      },
      {
        id: 5,
        type: "XL",
        desc: "Please specify your page size in pixels or just attach it to the request.",
        height: ">10000 px",
        price: 10000,
        eta: 3,
        qty: 0,
      },
    ],
    response: [],
    optimize: [],
    framework: [],
    layoutfont: [],
    layout: [{ option: "retina" }],
    advcss: [],
    addjs: [],
    intopt: [],
    compopt: [],
    proj: [],
    brief: "",
    filedata: [],
    contact: [],
    contactFlag: false,
  },
  reducers: {
    setcontactFlag(state, action) {
      state.contactFlag = !state.contactFlag;
    },

    putcontactdata(state, action) {
      state.contact = [];
      state.contact.push(action.payload);
    },

    incrementPagedata(state, action) {
      // state.pagesize.push(action.payload);
      const newItem = action.payload;
      const itemUpdate = state.pagesize.find((data) => data.id === newItem);
      // console.log("itemUpdate:", itemUpdate);

      if (!itemUpdate) {
        state.pagesize.push(action.payload);
      } else {
        // console.log("Old entry ", itemUpdate);
        // console.log("old qty:", itemUpdate.qty);

        itemUpdate.qty++;
        state.TotalCost = state.TotalCost + itemUpdate.price;
        console.log("state.TotalCost:", state.TotalCost);

        // console.log("itemUpdate.new qty:", itemUpdate.qty);
      }
    },
    decrementPagedata(state, action) {
      // state.pagesize.push(action.payload);
      const newItem = action.payload;
      const itemUpdate = state.pagesize.find((data) => data.id === newItem);
      // console.log("itemUpdate:", itemUpdate);

      if (!itemUpdate) {
        state.pagesize.push(action.payload);
      } else {
        // console.log("Old entry ", itemUpdate);
        // console.log("old qty:", itemUpdate.qty);

        itemUpdate.qty--;

        state.TotalCost = state.TotalCost - itemUpdate.price;
        console.log("state.TotalCost:", state.TotalCost);
      }
    },
    putresponsedata(state, action) {
      state.response = [];
      state.response.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.cost,
        cost: (action.payload.cost / 100) * state.TotalCost,
      });
    },
    putlayoutfontdata(state, action) {
      state.layout.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
      });
    },
    putlayoutretinadata(state, action) {
      state.layoutfont = [];
      state.layoutfont.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
      });
    },
    putframedata(state, action) {
      state.framework.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.pc,
        cost: (action.payload.pc / 100) * state.TotalCost,
      });
    },
    deleteframedata(state, action) {
      state.framework = state.framework.filter(
        (data) => data.id !== action.payload.id
      );
    },
    putoptimizedata(state, action) {
      state.response.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.pc,
        cost: action.payload.pc * state.TotalCost,
      });
    },
    deleteoptimizedata(state, action) {
      state.response = state.response.filter(
        (data) => data.id !== action.payload.id
      );
    },
    putadvcssdata(state, action) {
      state.advcss.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.cost,
      });
    },
    deleteadvcssdata(state, action) {
      state.advcss = state.advcss.filter(
        (data) => data.id !== action.payload.id
      );
    },

    putaddjsdata(state, action) {
      state.addjs.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.cost,
      });
    },
    deleteaddjsdata(state, action) {
      state.addjs = state.addjs.filter((data) => data.id !== action.payload.id);
    },
    putintoptdata(state, action) {
      state.intopt.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.pc,
      });
    },
    deleteintoptdata(state, action) {
      state.intopt = state.intopt.filter(
        (data) => data.id !== action.payload.id
      );
      state.TotalCost -= (action.payload.cost / 100) * state.TotalCost;
    },
    putcompoptdata(state, action) {
      state.compopt = [];
      state.compopt.push({
        id: action.payload.id,
        qty: 1,
        option: action.payload.option,
        pc: action.payload.pc,
      });
    },
    deletecompoptdata(state, action) {
      state.compopt = state.compopt.filter(
        (data) => data.id !== action.payload.id
      );
    },
  },
});

const store = configureStore({
  reducer: {
    dataSlice: formdata.reducer,
  },
});

export default store;
export const formAction = formdata.actions;
