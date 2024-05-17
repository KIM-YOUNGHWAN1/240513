import React, {useState} from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  //아이템을 다섯개를 한 페이지로 하는 것

  // 계산방식인데 1-5, 6-10 11-15이런 것.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="TodoList">
      {currentItems.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
      {/* 페이지 이동 버튼 */}
      <div className="pagination">
        {Array.from({length: Math.ceil(todos.length / itemsPerPage)}).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;
