import React from "react";

function Directory () {
    return (
        <div className="directory">
          <div>
            <select>
              <option value="option1">&#128509;gallery</option>
              <option value="option2">&#128508;Option 2</option>
              <option value="option3">&#128507;Option 3</option>
            </select>
          </div>
          <div>
            <button>&lt;&lt;</button>
            <button>&lt; prev</button>
            <input defaultValue='1-120/3000' style={{textAlign:'center'}}></input>
            <button>next &gt;</button>
            <button>&gt;&gt;</button>

          </div>
        </div>
        
    )
}

export default Directory;