import React from 'react';

const Search = ({ handleSearchNote }) => {
  return (
  <div className="search">
    
      <input onChange={(event)=>
        handleSearchNote(event.target.value)
      }
        type="text" placeholder="Type to search"
          className='p-2 rounded-md bg-slate-900 text-white w-full'
        ></input>
     </div>
     );
};
export default Search;