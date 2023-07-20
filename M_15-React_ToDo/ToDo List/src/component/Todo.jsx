import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <img src="https://th.bing.com/th/id/OIP.PkwB7XalTjRkPmpnkVHfiAHaCJ?pid=ImgDet&rs=1" />

      {/* Add Input and Button */}
      <div className="add-container">
        <input onChange={(e) => setItem(e.target.value)} placeholder="item" />
        <button onClick={addToList}>Add</button>
      </div>

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No items in the list.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
