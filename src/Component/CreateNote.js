import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{

       const [expand,setExpand]=useState(false)



         const[note,setNote]=useState({
            title:"",
            content:""
         })

 const InputEvent=(e)=>{
    /*const value=e.target.value
    const name=e.target.name // here target is method
    it can be written as below i.e object destructing*/

    const {name,value}=e.target
   
    setNote((prevData) => {
          const capitalizeFirstLetter = (str) => {
               return (
                    str.charAt(0).toUpperCase() + str.slice(1)
               )
            };
  
          return {
            ...prevData,
            [name]: capitalizeFirstLetter(value)
          };
      });
  
   }      
 
           const addEvent=()=>{
                 props.passNote(note)
                 setNote({
                    title:"",  /* to get new note one after another to get in line it's bcause
                    of css */
                    content:""
                 })
           }
       

           const expandIt=()=>{
            setExpand(true)
           }

           const minimizeIt=()=>{
            setExpand(false)
           }

      return (
           <>
           <div className="main_note" onDoubleClick={minimizeIt}>
                    <form>

                     {expand?   
                        <input type="text"
                         value={note.title}
                         name="title"
                        onChange={InputEvent}
                        placeholder="Title"
                        autoComplete="off"/> : null}
                        <textarea 
                        rows="5" 
                        column="10"
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                         placeholder="Write a Note!"
                         onClick={expandIt}
                         >
                         </textarea>
                         {expand?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign"/>
                        </Button>:null}
                    </form>
           </div>
           </>
      )

}

export default CreateNote