import React from 'react';
import "../Note/Note.css";

function Note(props) {
    // current date,time functions 
    let timer = 500,timeout;

    const formatDate = (value) =>{
        if (!value) return""

        const date = new Date (value);
        const monthNames=[
            "January", "February","March", "April" , "May" , "June" , 
            "July" , "August" , "September" , "October", "November", "December"
        ]
        // func for current hours
        let hrs = date.getHours();
        hrs = hrs = hrs % 24 || 24;
        hrs = hrs?hrs:"12";

        // func for current am & pm according to hours
        let ampm = hrs >12 ? "PM" : "AM";

        // func for current minutes
        let min = date.getMinutes();
        min=min<10? "0" + min:min

        // func for current date
        let day = date.getDate();

        // func for current month
        const month = monthNames[date.getMonth()] 

        return`${hrs}:${min} ${ampm} ${day} ${month}`;
    } 

    const debounce = (func) => {
        clearTimeout(timeout)
        timeout = setTimeout(func, timer);
    }

    const updateHead = (head,id) => {
        debounce(() => props.updateHead(head,id));
    }

    const updateText = (text,id) => {
            debounce(() => props.updateText(text,id));
    }
  return (
    <>
    <div className='note' style={{backgroundColor:props.note.color}}>
        <input type='text' placeholder='enter heading...' className='note-head' defaultValue={props.note.head} onChange={(event)=>updateHead(event.target.value, props.note.id)}/>

        <textarea className="note_text" placeholder='enter text...' defaultValue={props.note.text} onChange={(event)=>updateText(event.target.value, props.note.id)}></textarea>

        <div className="note-footer">
            <p>{formatDate(props.note.time)}</p>
            <i class="fa-solid fa-trash fa-sm" style={{color: "#000000"}} 
            onClick={()=> props.deleteNote(props.note.id)}></i>
        </div>

    </div>
    
    </>
  )
}

export default Note
