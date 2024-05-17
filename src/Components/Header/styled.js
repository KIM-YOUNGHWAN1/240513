import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  justify-content: space-between;
  /* 헤더 콘텐츠를 양쪽 끝으로 정렬. */

  //   <HeaderContents> TO-DO-LIST</HeaderContents>
  //   <div onClick={handleButtonClick}>나의 할 일</div>
  //   라고 하면  TO-DO-LIST_______________나의 할 일로 양끝이 정렬됨

  align-items: center;
  /* 콘텐츠를 수직으로 중앙 정렬. */

  height: 120px; /* 헤더의 높이를 설정. */
  padding: 0 20px; /* 좌우 여백을 설정. */

  box-sizing: border-box;
  /* 패딩과 테두리를 포함한 전체 너비와 높이 설정. */

  position: fixed;
  /* 헤더를 고정 위치로 설정. 이거 중요함 */

  top: 0; /* 페이지 상단에 고정. */
  left: 0; /* 페이지 왼쪽에 고정됩. */

  width: 100%; /* 화면 너비에 맞춰 헤더를 설정. */
  background-color: #c9c9c9c9; /* 헤더의 배경색을 설정. */

  z-index: 1000;
  /* 다른 콘텐츠 위에 헤더가 나타나도록 설정. */

  border-bottom: 1px solid #ddd;
  /* 헤더 아래에 구분선을 표시. */
`;

export const Navbar = styled.div`
  display: flex;
  padding: 20px 200px;
  /*상하 여백은 20px이고 좌우 여백은 200px로 설정*/

  gap: 100px;
  /*상하 여백은 20px이고 좌우 여백은 200px로 설정*/

  width: calc(100vh - 400px);
  /*내부 요소 사이의 간격은 100px로 설정*/
  /*Navbar의 너비는 뷰포트 높이(100vh)에서 400px를 뺀 값으로 설정*/
`;

export const HeaderContents = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const NavbarContents = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;
