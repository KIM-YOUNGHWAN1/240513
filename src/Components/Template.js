import React from "react";
import "./Template.css";

//템플릿에 기본 리스트를 표시
//children prop은 Template 컴포넌트에 전달된 하위 콘텐츠를 렌더링

const Template = ({children, todoLength, clickedTodoCount}) => {
  return (
    <div className="Template">
      <div className="title">총 갯수 {todoLength}</div>
      {/* {todoLength}를 받아옴. 이는 늘어난 갯수만큼 수가 반영이 되게 하기 위해 */}
      <div>{children}</div>
      {/* 칠드렌을 지우면 오늘의 할일 바가 사라짐  */}
      {/* 렌더링된 출력 todo-item 요소들이 포함되지 않기 때문 */}
    </div>
  );
};

export default Template;

////////////////////////////////////////////////////////////////////////////
//
//                             시작
//
// import React from "react";
// import './Template.css';
// const Template = ({ }) => {
//     return (
//         <div>
//             <div>오늘의 할 일 </div>
//             <div>여기에 할 일이 들어갑니다</div>
//         </div>
//     );
// };
// export default Template;
//
////////////////////////////////////////////////////////////////////////////

// 레이아웃을 정의하는 컴포넌트인 Template을 생성한다.
// 이 컴포넌트는 화면에서 공통적으로 사용되는 요소들을 그룹화하고 스타일을 적용하기 위해 사용한다.
// 따라서 컴포넌트의 시작점이다.
