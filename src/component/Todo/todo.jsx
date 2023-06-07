import React, { useEffect, useState } from "react";
import "./style.css";

// Returning the local storage values
const getLocalData = () => {
  const list = localStorage.getItem("myTodoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editedItems, setEditedItems] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  //   add the items function
  const addItems = () => {
    if (!inputData) {
      alert("Please fill the items/activity");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === editedItems) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );
      setInputData("");
      setEditedItems("");
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // To edit the items/activity
  const editItems = (index) => {
    const edited_item_list = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(edited_item_list.name);
    setEditedItems(index);
    setToggleButton(true);
  };

  //    function for deleting items
  const deleteItems = (index) => {
    const updatedlist = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedlist);
  };

  //  Removing all activity function
  const removeAll = () => {
    setItems([]);
  };

  // Local storage function
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/Todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="🖍️ Add items"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>
          {/* show the items  */}
          <div className="showItems">
            {items.map((curElm, index) => {
              return (
                <div className="eachItem" key={curElm.id}>
                  <h3>{curElm.name}</h3>
                  <div className="todo-btn" key={index}>
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => {
                        editItems(curElm.id);
                      }}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        deleteItems(curElm.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* remove all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
