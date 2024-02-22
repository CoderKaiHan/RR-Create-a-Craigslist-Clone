import React from "react";
import Help from "./help";
import './App.css';

function Sidebar () {
  return(
    <div className='sideBar'>
        <div>
            <h2 style={{color:'purple'}}>Furniture</h2>
        </div>

        <div>
            <button>all</button>
            <button>owner</button>
            <button>dealer</button>
        </div>

        <div>
            <div>
              <input type='checkbox' value={'search-titles-only'} id='checkbox1'/>
              <label htmlFor='checkbox1'>search titles only</label>
            </div>
            <div>
              <input type='checkbox' value={'has-image'} id='checkbox2'/>
              <label htmlFor='checkbox2'>has image</label>
            </div>
            <div>
              <input type='checkbox' value={'posted-today'} id='checkbox3'/>
              <label fhtmlFor='checkbox3'>posted today</label>
            </div>
            <div>
              <input type='checkbox' value={'bundle-duplicates'} id='checkbox4'/>
              <label htmlFor='checkbox4'>bundle duplicates</label>
            </div>
            <div>
              <input type='checkbox' value={'include-nearby-areas'} id='checkbox5'/>
              <label htmlFor='checkbox5'>include nearby areas</label>
            </div>
        </div>

        <div className="help">
            <Help/>
        </div>
    </div>
  )
}

export default Sidebar;