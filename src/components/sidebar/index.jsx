// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar} from '@fortawesome/free-solid-svg-icons';




const SideBar = () => {
//   const [sidebar, setSidebar] = useState(false)
//  const showSidebar =( ) => setSidebar(!sidebar)
  return (
   
    <div style={{backgroundColor:"#1A202E", width:"270px", height:"101vh", color:"#CFD8E3", padding:"25px 21px"}}>

        <h1 style={{height:"43px", cursor:"pointer" }}>Accounting</h1>

        <Link to='/dashboard' style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer", marginTop:"44px"}}><FontAwesomeIcon icon={faHouseChimney}  style={{paddingRight:"7px"}}/>Dashboard</div>
        </Link>
        <Link to='/accounting'  style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer", }}> <FontAwesomeIcon icon={faVideo} style={{paddingRight:"7px"}}/>Accounting</div>
        </Link>
        <Link to='/Transactions'style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer"}}> <FontAwesomeIcon icon={faPenToSquare} style={{paddingRight:"7px"}} />Transactions</div>
        </Link>
        <Link to='/Report' style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer"}}> <FontAwesomeIcon icon={faCirclePlay} style={{paddingRight:"7px"}}/>Report</div>
        </Link>
        <Link to='/Agency' style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer"}}><FontAwesomeIcon icon={faBullhorn} style={{paddingRight:"7px"}} />Agency</div>
        </Link>
        <Link to='/Settings' style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer"}}> <FontAwesomeIcon icon={faGear} style={{paddingRight:"7px"}}/>Settings</div>
        </Link>
        <Link to='/Trash' style={{color:"#CFD8E3", textDecoration:"none"}}>
        <div style={{height:"43px", cursor:"pointer"}}> <FontAwesomeIcon icon={faSackDollar} style={{paddingRight:"7px"}}  />Trash</div>
        </Link>
     
    </div>
     
    
  )
}

export default SideBar