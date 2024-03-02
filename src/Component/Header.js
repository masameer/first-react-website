import React from "react";
import logo from   "./image/Google-Keep.png"

const Header=()=>{
      return (
           <>
           <div className="header">
             <img src={logo} alt="logo" width="70" height="50"/>
             <br/>
             <h1>Notes</h1>
           </div>
           </>
      )

}

export default Header