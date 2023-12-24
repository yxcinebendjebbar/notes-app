import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const AddNote = () => {
  

  return(<Link to='/notes/new' className="flex flex-col gap-2 justify-center items-center bg-blue-700 hover:bg-blue-500 transition-colors w-[8rem] h-12 rounded-lg">
    Add note
  </Link>
  );
};
export default AddNote;