import React from 'react'
import { Link } from 'react-router-dom';


const Note = ({ note }) => {
    return(
        <div className='flex bg-gray-950 border border-gray-900 shadow-md rounded-md p-1'>
          <Link to={`/notes/${note.id}`}
           className='flex flex-col bg-gray-950 p-4'>
              <span className='text-gray-600'>{note.date}</span>
              <div className='mt-2'>
              <p className='text-lg'>{note.body}</p>
              </div>
          
          </Link>
        </div>
    )
  };

export default Note