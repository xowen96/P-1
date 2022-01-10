

import getHtml from "./login.js";

const $ =document;

export default function makeMoveButton (root,title){
  const button = $.createElement("div");
  button.innerHTML = title;
  button.addEventListener("click",() =>moveToTitle(root,title));
  root.appendChild(button);
}


function moveToTitle(root,title){
  history.pushState(null,null,`/${title}`); // 타이틀로 이동한다는뜻
  switch(title){
    case "로그인":
      getHtml(root);
      break;
    
  }

  
}