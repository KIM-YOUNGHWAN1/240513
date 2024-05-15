import React from "react";
import './Template.css';

const Template = ({children, todoLength}) => {
    return (
        <div className="Temlate">
            <div className="title">今日のやり方 {todoLength}</div>
            <div>{children}</div>
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