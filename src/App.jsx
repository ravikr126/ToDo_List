import React, { useState } from 'react';
import Todolist from'./Todolist';
const App= () =>{
// 16:24 se dekna hai video
  const [inputList, setInputList] =useState("");
  const[Items, setItems]=useState([]); 
  
  const itemEvent =(event) =>{
      setInputList(event.target.value);
  };


  //yeh code list me value add karega and jab aap button click karoge tab woh value main box se gaya ho jayegi and list me save ho jayegi
  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList]
    });
    setInputList('');
  };

  
    return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder='Add a items' 
        value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
  
  
        <ol>
          {Items.map( (itemval) =>{
            return <Todolist text ={itemval}/>;
          })}
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;