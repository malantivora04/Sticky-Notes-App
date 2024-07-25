import React, { useState } from 'react'
import '../Sidebar/Sidebar.css'

function Sidebar(props) {

    //for rendering colors
    const colors = ["#FAEDCB", "#C9E4DE", "#C6DEF1", "#DBCDF0", "#F2C6DE" , "#F7D9C1"]

    const[listOpen, setListOpen]= useState(false);
    return (
    <>
    <div className="sidebar">
        
        <i className="fa-solid fa-square-plus fa-2xl" onClick={() => setListOpen(!listOpen)} style={{color: "#000000"}}></i> 
        <ul className= {`sidebar_list ${listOpen? "sidebar_list_active" : ""}`}>
            {
                colors.map((item,index) => (
                    <li 
                        key={index}
                        className="sidebar_list_item" 
                        style = {{backgroundColor: item}}
                        onClick={ ()=> props.addNote(item)}>
                    </li>
                    
                ))
            }
            
        </ul>
    </div>
    
    </>

  )
}

export default Sidebar
