import { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || [])

  //note structure by onclick
  const addNote =(color) => {
    const tempNotes=[...notes];

    tempNotes.push({
      id: Date.now() +"" + Math.floor(Math.random()*78),
      text:"",
      time: Date.now(),
      color,
    });
      setNotes(tempNotes);
  }

  // delete the note permanently by onclick
  const deleteNote = (id) =>{
    const tempNotes=[...notes]
    const index = tempNotes.findIndex(item=> item.id===id)

    if (index<0)return

    tempNotes.splice(index,1);
    setNotes(tempNotes);
  }

  // edit note content 
  const updateText = (text,id) => {
    const tempNotes=[...notes]
    const index = tempNotes.findIndex(item=> item.id===id)

    if (index<0)return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  // edit heading content
  const updateHead = (head,id) => {
    const tempNotes=[...notes]
    const index = tempNotes.findIndex(item=> item.id===id)

    if (index<0)return;

    tempNotes[index].head = head;
    setNotes(tempNotes);
  }

  // locally storing data 
  useEffect(() =>{
    localStorage.setItem('notes-app', JSON.stringify(notes))
  },[notes])
  
  return (
    <>
    <div className='App custom-scroll' >
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText} updateHead = {updateHead}/>
    </div>
      
    </>
  );
}

export default App;

