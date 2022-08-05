import React, { useState } from 'react'
import './form.css'
import Box from '@mui/material/Box';


export const Form = () => {
    const[qty,setQty]=useState({
        xsquantity :0,
        squantity : 0,
        mquantity : 0,
        lquantity : 0,
        xlquantity : 0,
        optimization : 0,
        response : 0,
        framework : 0
    })
 

 const [sectionoptimization,setSectionOptimization] = useState({
    select : false,
    percentage : 0
 })

 const [openXS,setOpenXS] = useState(false)
 const [openS,setOpenS] = useState(false)
 const [openM,setOpenM] = useState(false)
 const [openL,setOpenL] = useState(false)
 const [openXL,setOpenXL] = useState(false)
 const [opentotal,setOpentotal] = useState(false)
 const [openoptiontotal,setoptiontotal] = useState(false)
 const  [response1,setResponse1] = useState(false)
 const  [response2,setResponse2] = useState(false)
 const  [response3,setResponse3] = useState(false)
 const [framework1,setframewok1] = useState(false)
 const [optimization,setoptimization] =useState(false)
 

 console.log(qty.xsquantity)
 var xs = qty.xsquantity * 99
 var s = qty.squantity * 199
 var m = qty.mquantity * 398
 var l = qty.lquantity * 789
 var total = xs+s+m+l

 var xseta = qty.xsquantity * 2
 var seta = qty.squantity * 2
 var meta = qty.mquantity * 3
 var leta = qty.lquantity * 3
 var optiontotal  = Math.ceil((((total*Number(qty.response))/100)+(total*Number(qty.framework))/100)+(total*Number(qty.optimization))/100)

console.log(total,Number(qty.response),optiontotal)

var finaltotal = total+optiontotal

 
 var etatotal = xseta+seta+meta+leta

const handleoptions = (name, operation) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? qty[name] + 1 : qty[name] - 1,
      };
    });
    
  };

 
  const handleresponseoptions = (name, value) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleframeworkoptions = (name, value) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleoptimizatiooptions = (name, value) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }; 
  console.log("response",qty.response)
   console.log("final data",qty)
  

  return (
    <>

    
<div style={{ textAlign: "justify", marginLeft: "30px", width: "100%" }}>
    <div className='pagesection'>
    <h2> Select the required page sizes</h2>
    <div className='pageselectheader'>
      
    <div className='pageselectbutton'>
      <button >XS</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>About Us (text page only), Terms of Use, Privacy Policy, Single Blog Post, 404 page, Other text pages.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height  </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$99</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~2 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xsquantity", "d") ;
                  }}
                  disabled={qty.xsquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.xsquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xsquantity", "i");setOpenXS(true);setOpentotal(true)}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >S</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>About Us (beyond text page), FAQ, Contact Us, Testimonials, Our Team..</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 1500 - 2500px  </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$199</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~2 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("squantity", "d")
                  }}
                  disabled={qty.squantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.squantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("squantity", "i");setOpenS(true);setOpentotal(true)}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >M</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 2500 - 5000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$398</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~3 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("mquantity", "d")
                  }}
                  disabled={qty.mquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.mquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("mquantity", "i");setOpenM(true);setOpentotal(true)}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >L</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 2500 - 5000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$398</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~3 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("lquantity", "d")
                  }}
                  disabled={qty.lquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.lquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("lquantity", "i");setOpenL(true);setOpentotal(true)}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >XL</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Please specify your page size in pixels or just attach it to the request.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height  10000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>Custom</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~Custom</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xlquantity", "d")
                  }}
                  disabled={qty.xlquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.xlquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xlquantity", "i");setOpenXL(true);setOpentotal(true)}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
   </div>
   

   <div className="optimizationheader">
         <h2>Optimization and Accessbility</h2>
        <div className="optimizationsection">
            <span>We create clean and optimized code that meets the rigorous W3C standards. For its full compliance with the accessibility requirements, select this option:</span>
        </div>
        <div className="optimizationsection">
           <span> Section 508 / WCAG-----------------<input type="checkbox" name="optimization" value="15"   onClick={()=>{handleoptimizatiooptions("optimization",15);setoptimization(true)}}/>15%</span>
            </div>
        </div>

<div className='responsivenessheader'>
<h3>Responsiveness</h3>
<div className='responsivenesssection'>
  <span>At P2H’s discretion ----------------------<input type="radio" name="response" value="0" onClick={()=>{handleresponseoptions("response",0);setResponse1(false);setResponse2(false);setResponse3(false);setoptiontotal(true)}} />included</span>
 </div>
 <div className='responsivenesssection'>
  <span>I have one resolution----------------------<input type="radio" name="response" value="10"  onClick={()=>{handleresponseoptions("response",10);setResponse1(true);setResponse2(false);setResponse3(false);setoptiontotal(true)}}/>+10%</span>
  </div>
  <div className='responsivenesssection'>
  <span>I have 2 resolutions (e.g. Tablet & Mobile)----------------------<input type="radio" name="response" value="20"  onClick={()=>{handleresponseoptions("response",20);setResponse2(true);setResponse1(false);setResponse3(false);setoptiontotal(true)}} />+20%</span>
  </div>
  <div className='responsivenesssection'>
  <span>I have a design for 3 resolutions and more----------------------<input type="radio" name="response"  value="30"  onClick={()=>{handleresponseoptions("response",30);;setResponse3(true);setResponse2(false);setResponse1(false);setoptiontotal(true)}}/>+30%</span>
  </div>
</div>

<div className='frameworkheader'>
<h3>Framework</h3>
<div className='frameworkheadersection'>
  <span>None ----------------------<input type="radio" name="framework" value="included"  />included</span>
 </div>
 <div className='frameworkheadersection'>
  <span>Bootstrap----------------------<input type="radio" name="framework" value="10"  onClick={()=>{handleframeworkoptions("framework",10);setframewok1(true);setoptiontotal(true)}}/>+10%</span>
  </div>
</div>


   
    <div className='summaryheader'>
        
      <h3>SUMMARY</h3>
     
     {openXS &&  <div className='summarycontent'>
      <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xsquantity", "d");
                  }}
                  disabled={qty.xsquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xsquantity", "i");}}>+</button>
                     <span className='summarycontenttext'>{`XS ------------${qty.xsquantity} x $99 = $${xs}`}</span>
      </div>
}


{openS &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("squantity", "d")
                  }}
                  disabled={qty.squantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("squantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`S ------------${qty.squantity} x $199 = $${s}`}</span>
      </div>
}
 
{openM &&  <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("mquantity", "d")
                  }}
                  disabled={qty.mquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("mquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`M ------------${qty.mquantity} x $199 = $${m}`}</span>
      </div>
}

{openL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("lquantity", "d")
                  }}
                  disabled={qty.lquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("lquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`L ------------${qty.lquantity} x $199 = $${l}`}</span>
      </div>
}

{openXL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xlquantity", "d")
                  }}
                  disabled={qty.xlquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xlquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`XL ------------${qty.xlquantity}  = $custom`}</span>
      </div>
}

<div className='summarycontent'>
      {response1 && opentotal && <span> {`I have one resolution ----------+${qty.response}%`}</span>}
      {response2 && opentotal && <span> {`I have 2 resolutions (e.g. Tablet & Mobile) ----------+${qty.response}%`}</span>}
      {response3 && opentotal && <span> {`I have a design for 3 resolutions and more ----------+${qty.response}%`}</span>}
      <div>
      {optimization && opentotal &&  <span>{`Section 508 / WCAG--------------------+${qty.optimization}%`}</span>}
      </div>
      <div>
      {framework1 && opentotal && <span>{`Bootstrap--------------------------+${qty.framework}%`}</span>}
      </div>
      </div>
 {openoptiontotal && opentotal &&   <div className='summarycontent'>
        {`Options Total ----------$${optiontotal}`}
      </div>}
      <hr />
  {opentotal &&   <div className='summarycontent'>
        <span>{`Pages Total ----------$${finaltotal}`} </span>
        </div>
        }

  

{opentotal &&    <div className='summarycontent'>
        <span>{`ETA----------${etatotal} Bussiness days`} </span>
        </div>}

   
    </div>
    </div>

    </>
  )
}

export default Form
