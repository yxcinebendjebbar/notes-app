import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const NotePage = () => {

    const navigate = useNavigate()

    let { id } = useParams()

    let noteId = String(id)
    

    let [note, setNote] = useState(null)

    useEffect(()=>{
        getNote()
    }, [noteId])

    let getNote = async ()=>{
        if ( noteId === 'new') return
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async ()=>{
        fetch(`http://127.0.0.1:8000/api/notes/create/`,
        {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        }).then(result => console.log(result))
        .catch(error => console.log('error', error));
        navigate('/')
    }

    let updateNote = async ()=>{
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`,
        {
            method: 'PUT',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        }).then(result => console.log(result))
        .catch(error => console.log('error', error));
        navigate('/')
    }

    const deleteNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`,{
            method: 'DELETE',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(result => console.log(result))
        .catch(error => console.log('error', error));
        navigate('/')
    }
      let handleSubmit= () =>{
        if(noteId !== 'new' && note.body === ''){
            deleteNote()
      }
        else if(noteId !== 'new'){
            updateNote()
        }
        else if(noteId === 'new' && note !== null){
            createNote()
        }
    }

  return (
    
    <div className='flex flex-col p-4 rounded-md shadow-md bg-slate-900'>
        <button to='/' onClick={()=>{ navigate("/") }}
         className='text-xl underline transition-colors cursor-pointer hover:text-gray-400' >Back</button>
        <span className='text-gray-600'>{note?.date}</span>
            <textarea className='w-full p-2 text-white rounded-md outline-none bg-slate-900' 
    rows="8" 
    cols="24"  onChange={(e) => {
                setNote({...note, body: e.target.value})
            }} value={note?.body}></textarea>
            
            {noteId !=='new' ? (
                <div>
                <button onClick={handleSubmit} className='self-end px-4 py-2 mt-4 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600'>Update</button>
                <button onClick={deleteNote} className='self-end px-4 py-2 mt-4 text-white transition-colors bg-red-500 rounded-md hover:bg-red-600'>Delete</button>
                </div>
            )
            :(
                <button onClick={handleSubmit} className='self-end px-4 py-2 mt-4 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600'>Save</button>
            )}
    </div>
  )
}

export default NotePage