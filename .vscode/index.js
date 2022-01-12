import header from "./header.js";
import makeMoveButton from "./button.js";




// const state = {
//   state: "main",
// }


const $ = document;
const root = $.querySelector("#root");


header(root);
makeMoveButton(root,"로그인");
makeMoveButton(root,"메뉴");
makeMoveButton(root,"게시글");

// tableMain 테이블 html 메인에 배치하면 다른페이지로 넘어갈시에 사라지지않는 문제점 
// 메뉴를 눌렀을때 click event 와 이동하기전 게시글 목록창 구현방법 
// 서버를 따로파야되는지? DB를 가져온다면 어떤 부분에서 DB를 가져와서 구현해야되는지? 
//등록하기 게시글작성, 번호 미구현