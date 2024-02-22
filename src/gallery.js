import React from "react";
import {postings} from "./postings";

function Gallery () {
    
    return(
        <div className="gallery">
            {postings.map((posting, index) => {
                return (
                  <div className="posting">
                    <label>{posting.price}</label>
                    <img style={{display:'contain', maxHeight:'80%'}}  src={posting.imageURL} alt="Item"/>
                    <a href={posting.imageURL} style={{display:'block'}}>{posting.title}</a>
                    {/* <p>{posting.description}</p> */}
                  </div>
                )}
            )}
        </div>
    )
}

export default Gallery;