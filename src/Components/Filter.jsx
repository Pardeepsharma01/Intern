import React, { useState } from 'react'


    const Filter = ({dropdownContent, buttonText })=> {
        const[showDropedown, setShowDropedown]=useState(false);
        const[currentBuottonText, setCurrentButtonText]=useState(buttonText);
        const toggleDropedown =() => 
        {
            setShowDropedown(!showDropedown);
        }
        const handleContextMenu =(event) =>{
            event.preventDefault();
            const newName =prompt("Enter new name for the filter button",currentBuottonText);
            if(newName){
                setCurrentButtonText(newName);
            };
        }
  return (
   < div >
    <button onClick={toggleDropedown}
    onContextMenu={handleContextMenu}>{currentBuottonText}</button>
    {showDropedown && (
        <div style ={{position:"absolute",
            left:0,
            backgroundColor:"white",
            border: "1px solid blue",
            padding:"10px",
            zIndex: 1,
        }}>
        {dropdownContent.map((item, index) =>(
            <div key={index} style={{padding: "5px 0"}}>
                <label>
                    {item.name}:
                    <input type={item.inputType}/>
                    </label>
                    </div>
        ))}
        </div>
    )}
    </div>
       

    );
};
  

export default Filter