
const $ = document;

export default function renderMenu(root){
  

  root.innerHTML =
  
  `
  <nav class="board-menu">
  <ul id="board-list">
    
     <li><a href="/main" class="board_link" >자유게시판</a></li>
     <li><a href="/secret" class="board_link" >비밀게시판</a></li>
     <li><a href="/info" class="board_link" >정보게시판</a></li>
     <li><a href="/promo" class="board_link" >홍보게시판</a></li>
     <li><a href="/software" class="board_link">SW게시판</a></li>
     
     <!--(li>a)*5입력후 tab 5번 그대로나옴-->
  </ul>
</nav>
   `
 
  
}