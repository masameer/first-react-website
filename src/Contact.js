import React,{useState} from "react";

const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    phoneno:"",
    email:"",
    msg:""
  })

  const inputEvent=(e)=>{
      const {name,value}=e.target /* after onChange happens it target all  value
            and fetch it  */
          setData((preval)=>{
               return {
                    ...preval,
                    [name]:value
                    /* ...preval take all value
                    now [name] when user write in input field it should fetch it, it's name attribute
                      which is fullname for first one , when user put input which is "value" whose name attribute is also
                     firstname when they are equal, then in place of firstname the value which wrote will be added(all this can be seen in inspect console ) 
                    now with data.fullname(it's in object above) we can fetch that data*/
                  } 
            })
      
    }
  const formSubmit=(e)=>{
          e.preventDefault()
          alert(`
          My name is ${data.fullname}.My mobile number is ${data.phoneno}.
          My email is ${data.email},Here is what i want to say ${data.msg}`)

    }



  return (
    <div className="contact-container">
      <h1>Contact US</h1>
      <div className="contact-form">
        <form onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text"
              id="fullName"
              className="form-control"
              name="fullname"/* name ="fullname"
              and data.fullname here fullname is same make sure to do the with other aswell */
              value={data.fullname}
              onChange={inputEvent}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              type="tel"
              id="phoneNo"
              className="form-control"
              name="phoneno"
              value={data.phoneno}
              onChange={inputEvent}
              placeholder="Phone No"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={inputEvent}
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group" >
            <label htmlFor="message">Message</label>
            <textarea
             
              className="form-control"
              name="msg"
              value={data.msg}
              onChange={inputEvent}
              
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
