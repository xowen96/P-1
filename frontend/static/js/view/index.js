
import login from "./login.js";




const navigateTo = url => {
  history.pushState(null,null,url);
  router();
}


const router = async () =>{
  const routes = [
    {path: "/", view: "./frontend/static/index.html"},
    {path: "/login", view: login},
   
    
  ];
  //test each route for potential match
  const potentialMatches = routes.map(route => {
    return{
      route:route,
      isMatch:location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
  if(!match){
    match ={
      route:routes[0], //맨위의 메인 페이지 path 를 뜻함 
      isMatch:true //거기로 돌려보낸다는뜻 
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  //view property 가 actual function 이기에 path 가 아님 
};

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded",()=>{
  document.body.addEventListener("click", e => {
    if(e.target.matches("[data-link]")){ //data-link 가 포함되어있으면 타겟에 
      e.preventDefault(); //새로고침 기본효과를 없애고 
      navigateTo(e.target.href); //타겟의 href 주소로 이동한다 
    }
  })
  router();
});


