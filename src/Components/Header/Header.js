import React from "react";
//오늘의 할일 글씨는 헤더가 아님. 여기에서 찾지 말 것.
//템플릿의 타이틀 요소임

import {HeaderContainer, HeaderContents} from "./styled"; // styled-components에서 가져오기

const handleMenuToggle = () => {
  console.log("네비게이션 메뉴.");
};

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContents onClick={handleMenuToggle}> TO-DO-LIST</HeaderContents>
    </HeaderContainer>
  );
};

export default Header;
