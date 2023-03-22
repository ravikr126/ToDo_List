import React, { useState } from 'react';
import Todolist from'./Todolist';
const App= () =>{
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

  const deleteitems = (id) =>{
    console.log("del");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem ,index)=>{
          return index !== id;
      })
    })
}
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
          {Items.map( (itemval, index) =>{
            return <Todolist key={index} id={index} text ={itemval} onSelect={deleteitems}
            />;
          })}
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;