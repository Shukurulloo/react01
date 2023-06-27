import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';






const Dashboard= () => {
  return (
 <div> <div className='navbar' style={{ height:"80px",  display:"flex",  }}>
 <div style={{margin:"18px", display:"flex", flex:"1"}}> <FontAwesomeIcon icon={faBars} size='xl' style={{margin:"13px 40px "}} /></div>

<div style={{display:"flex", flexDirection:"column"  }}>
  <div style={{fontSize:"12px", margin:"15px", display:"flex"}}>
    <img src="https://web-assets.bcg.com/dims4/default/0273376/2147483647/strip/true/crop/428x428+0+0/resize/640x640!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Fab%2Fb2%2F556d41df4f9684aba4943f717426%2Fheadshot-of-cmo-jessica-apotheker-1.jpg" alt=""  style={{width:"36px", borderRadius:"8px", marginRight:"8px"}}/>
    <div><p>Sylvia Johnston</p> 
    <p style={{paddingTop:"5px"}}>Admin</p></div>
<FontAwesomeIcon icon={faChevronDown} style={{margin:"10px 20px"}} size='lg'/>

</div>
<img src="" alt="" />
</div>
 </div>
  <div className='dashbord' style={{}}>
    <div className="accounting">
      <div className="left"><div>
        <h1 style={{fontSize:"24px", padding:"34px 34px 7px"}}>Accounting</h1>
        <div className='accounting3'>
          <p style={{fontSize:"13px", color:"#5850EC", paddingLeft:"34px"}}>Dashboard</p>
          <FontAwesomeIcon icon={faAngleRight}  style={{margin:"4px"}} size='xs'/>

          <p style={{fontSize:"13px",color:"#5850EC"}}>Agency</p>
          <FontAwesomeIcon icon={faAngleRight} style={{margin:"4px"}} size='xs' />
          <p style={{fontSize:"13px"}}>Accounting</p>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} className='icon3' /> <p>Search...</p></div>
        {/* <input type="search" className='input1' placeholder='Search' /> */}
        <div className='new-first'><FontAwesomeIcon icon={faChevronDown} className='icon1'/> <p>New first</p></div>
        <div className='Show-Only'><FontAwesomeIcon icon={faChevronDown} className='icon2'/> <p>Show Only</p></div>
        {/* <select className="select" id="">
          <option value="">New first</option>
          <option value="">New first2</option>
          <option value="">New first3</option>
        </select>

        <select className="select2" id="">
          <option value="">Show Only</option>
          <option value="">Show Only2</option>
          <option value="">Show Only3</option>
        </select> */}

        <button className='button1'><FontAwesomeIcon icon={faPlus} /> Add Account</button>
      </div>
    </div>
    <div className="web">
     <div className="web2">
      <div className='web-acount'>Accounts</div>
    <div className='web-products'>Products</div>
    
    </div>
    {/* <div className="border"> */}
    <div className="borderdiv"></div>
    <div className="border-div"></div>
    {/* </div> */}
    <div class="container">

  <div class="web3" style={{marginLeft:"30px", marginTop:"15px"}}>

    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p>
  </div>
  <div class="web3" style={{ marginTop:"15px"}}>    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
  <div class="web3" style={{marginLeft:"30px"}}>
  <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p>
  </div>
  <div class="web3">    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
  <div class="web3" style={{marginLeft:"30px"}}>    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
  <div class="web3">    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
  <div class="web3" style={{marginLeft:"30px"}}>    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
  <div class="web3">    <div className='akshay'> <div style={{display:"flex"}}><h4>Akshay Syal</h4>
    <button className='buttonsub'>Sub-agent</button></div>
    <FontAwesomeIcon icon={faPenToSquare} className='icon4' />
    <FontAwesomeIcon icon={faTrashCan}  className='icon5' />
    </div>
    <p>Jose Kennedy</p>
    <p>  <span style={{fontWeight:"600"}}>Gst </span> 0989898989898</p>
    <div style={{ display:"flex"}}>
      <p> Fonseca Compund, 541, Akurli Rd,</p>
      <p style={{ marginLeft:"150px"}}><span style={{fontWeight:"600"}}>  Phone no:</span> 9876543210</p>
    </div>
    <p> Near Post Office, Kandavali (east)</p></div>
</div>
    </div>
    </div>
  </div>


   
  )
}
export default Dashboard