const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);

};
//(1)
// || 문법은 변수 선언에 있어서 해당하는 값이 있는 경우 앞의 값을 선언하고 없는 경우에는 뒤의 값을 선언하게 된다.
// 선언된 e 변수 두의 ||는 크로스 브라우징을 위해 사용된 것으로 이벤트 객체 중 맞는 부분에 사용할 수 있게된다.
//route function 은 link default behabvior을 조작하고 링크로 이동하는 새로고침 default 행동을 막는다. 즉 SPA 에서 버튼을 클릭시 새로고침이 되지않게금함 
// history API 인 pushState, a태그 앵커의 href 값을 세번째 인수에 전달해서 브라우저 기록 API를 사용 == 브라우저의 url 이 업데이트됨 


const routes = { //(4) 버튼마다 경로를 각각 지정해준다  
  // 키가 있는 경로 객체를 만들고, 해당경로에대한 값인 html 파일을 만든다. (허나 이 부분에서 그러면 여러개의 html 파일을 만들어야되는건 아닌가라는 의문점이 생김)
  //각각이 { [0],[1],[2] ... 의 배열 상태로 지정되어있다고 생각하면 될 것 같은데 } 밑에서 routes[path] || routes[404] 코드에서 확인.

  404: "pages/404.html", //page load 안되면 404
  "/": "pages/index.html", //main 페이지
  "allBoard": "pages/allBoard.html",
  "/secret": "/pages/about.html", //비밀게시판 
  "info": "/pages/info.html", //정보게시판
  "advt": "/pages/advt.html", //홍보 게시판 
  "SW" : "/pages/SW.html" //SW게시판 
};




const handleLocation = async () => {
  const path = window.location.pathname; //(3)위치변경 처리 handleLocation, 현재위치에서 경로이름을 캡쳐해야됨 
  const route = routes[path] || routes[404]; // (5) routes 튜플안에있는 키와 값을 가져오거나 없으면 404를 반환한다. 
  const html = await fetch(route).then((data)=> data.text()); //(6) 경로를 유일한 인수로 전달하여 가져오기를 호출하여,응답을 텍스트 로 변환한다. 
  document.getElementById("mainPage").innerHTML = html; //(7) 로드할 HTML 이 있음으로 innerHTML을 mainPage에 할당함 .
}


window.onpopstate = handleLocation; 
//(8) 사용자가 브라우저 앞으로 뒤로 이동할때 처리할 window.onpopstate 처리에 대해 handleLocation 함수를 할당하고
//페이지 로드에서 handleLocation을 호출하여 모든 경로에대한 올바른 페이지를 로드함 


window.route= route; //이 작업을 마쳐야 경로기능에대한 전역 액세스 권한을 부여받을 수 있음 (2) 
// onclick= "route()" 함수를 각각의 앵커 a 태그에 지정해줌으로써 버튼을 누르면 각각의 url로 이동할 수 있게금 함 

handleLocation();
//경로함수를 호출할때 마다 호출하도록함 

//https://www.youtube.com/watch?v=ZleShIpv5zQ