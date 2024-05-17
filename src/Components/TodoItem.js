import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import "./TodoItem.css";

// todo 개별 할 일 항목의 데이터 (id, text, checked)
// onCheckToggle 체크박스 클릭 시 불러와짐. 호출 함수. Check
// onInsertToggle 입력창을 열거나 닫을 때 적용 함수. Insert
// onChangeSelectedTodo 선택된 할 일의 상태를 변경하는 함수.

//  onInsertToggle: 새로운 할 일을 추가하는 입력창을 열거나 닫음
// onInsertTodo: 새로운 할 일을 추가하는 함수
// selectedTodo: 수정하거나 삭제할 할 일에 관한 정보를 지님
// onRemove: 할 일을 삭제하는 함수.
// onUpdate: 할 일을 수정하는 함수.

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const {id, text, checked} = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {/* 컨텐츠를 한 번더 누르면 체크 해제 가능, 체크값 true에서 false로 돌아옴 */}
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////
