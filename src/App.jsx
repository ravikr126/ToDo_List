import React, { useState } from 'react';
const App= () =>{
// 16:24 se dekna hai video
  const [inputList, setInputList] =useState("");
  const itemEvent =(event) =>{
      setInputList(event.target.value);
  };

  const listOfItems = () =>{

  };

  
    return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder='Add a items' onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
  
  
        <ol>
          <li>{inputList}</li>
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;