import React from "react";

const Footer =()=>{
     const date= new Date().getFullYear()
       return(
        <>
         <footer>
            <p> &copy; {date} Navbar. All Rights Reserved | Terms and condition </p>
         </footer>
        </>
       )

}

export default Footer