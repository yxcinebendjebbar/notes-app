import React, { useState, useEffect } from 'react'
import Note from '../components/Note';
import AddNote from '../components/AddNote';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
const NotesList = () => {

  const navigate = useNavigate()

  let [notes, setNotes] = useState([])

  useEffect(()=>{
    getNotes()
  }, []);


  let getNotes = async ()=>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  


  return(
    <div className='flex flex-col gap-2 md:grid md:grid-cols-3 md:grid-rows-3 bg-slate-950'>
      {notes.map((note)=> (
      <Note 
      key={note.id}
      note={note}
      />
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList