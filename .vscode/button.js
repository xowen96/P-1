

import renderLogin from "./login.js";
import renderMenu from "./menu.js";

const $ =document;

export default function makeMoveButton (root,title){
  const button = $.createElement("div");
  button.className = "clickButton"; //로그인, 메뉴 따로 클래스를 지정해주고싶음 
  button.innerHTML = title;
  button.addEventListener("click",() =>moveToTitle(root,title));
  root.appendChild(button);  //함수를 따로따로만들고 기능을 분리.
}


function moveToTitle(root,title){
  history.pushState(null,null,`/${title}`); // 타이틀로 이동한다는뜻
  switch(title){
    case "로그인": //로그인이면 
      renderLogin(root); //getHTML 함수를 호출 
      break;
    case "메뉴":
      renderMenu(root);
      break;
    
  }

  
}

//1. 로그인 메뉴 div 태그에 대해 따로 클래스를 지정하고싶음 

//메인메뉴 게시글을 구현하려고한다면 
//새로고침 전에 화면에 display 되어야되니깐 
//index.html에 태그형식으로 해야되는건 아닌지? 
//근데또 바닐라 js는 root태그 하나로 블럭을 쌓듯이 만드느거라 
//어느쪽이 맞는건지 모르겠음. 
//함수를 따로따로만들고 기능을 분리.