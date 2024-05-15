import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
// 아이콘으로 사용할 쓰레기통과 지우개 인폿

import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo, 
  selectedTodo, onRemove,onUpdate 
}) => {

  // 부모 컴포넌트에서 전달.
//   TodoInsert 컴포넌트에서 다섯 가지 props를 받아옴. 

//  onInsertToggle: 새로운 할 일을 추가하는 입력창을 열거나 닫음
// onInsertTodo: 새로운 할 일을 추가하는 함수
// selectedTodo: 수정하거나 삭제할 할 일에 관한 정보를 지님
// onRemove: 할 일을 삭제하는 함수.
// onUpdate: 할 일을 수정하는 함수.


    const [value, setValue] = useState("");
    // useState로 기본 상태를 정의.
    // value는 현재 input 요소 값, setValue는 이 값을 업데이트한 함수임

    const onChange = (e) => {
        setValue(e.target.value);
        };

        // 인풋 요소 값이 변경될 때 사용. 원래의 단어에서 e가 붙는 형식.
        // onst onChange = (e) => { setValue(e.target.value); };
        // 사용자가 텍스트를 입력할 때마다 그 내용을 저장하는 역할




    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };

    // 맨 앞에 e.가 붙었음.  전송을 필터링할 수 있게 e가 들어감.






    useEffect(() => {
        if (selectedTodo) {
        setValue(selectedTodo.text);
        }
    }, [selectedTodo]);
    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form
          onSubmit={
            selectedTodo
              ? () => {
                  onUpdate(selectedTodo.id, value);
                }
              : onSubmit
          }
        >
          <input
            placeholder="please type"
            value={value}
            onChange={onChange}
          ></input>
          {selectedTodo ? (
            <div className="rewrite">
              <TiPencil
                onClick={() => {
                  onUpdate(selectedTodo.id, value);
                }}
              />
              <TiTrash
                onClick={() => {
                  onRemove(selectedTodo.id);
                }}
              />
            </div>
          ) : (
            <button type="submit">
              <MdAddCircle />
            </button>
          )}
        </form>
      </div>
    );
  };
export default TodoInsert;
