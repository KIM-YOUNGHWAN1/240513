import React, {useEffect, useState} from "react";
import {MdAddCircle} from "react-icons/md";
import {TiTrash, TiPencil} from "react-icons/ti";
import "./TodoInsert.css";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      onUpdate(selectedTodo.id, value);
    } else {
      onInsertTodo(value);
    }
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        {/* ///form이 메세지 창임, 새로뜨는 창 */}
        <input placeholder="적어주세요" value={value} onChange={onChange} />
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil />
            <TiTrash />

            {/* <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            /> */}
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
            <TiPencil />
            <TiTrash />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
