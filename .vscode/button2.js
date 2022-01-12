export default function toggleBttn(){
  
  const toggleButton = document.querySelector(".clickButton");
  //head .class 불러옴 
  const boardList = document.querySelector("#board-list");
  //board-list 불러옴 
  
  toggleButton.addEventListener("click", () => {
    boardList.classList.toggle("active");
  });
  //메뉴버튼을 누르면 이벤트가 실행되는데 {보드리스트를 누르면 active 가됨 이걸 css 에서 display
  //none , flex 를 활용해서 보여줄수있다.}
  
}


