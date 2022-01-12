const $ = document;

export default function renderLogin(root){
  

  root.innerHTML =
  
  `
  <div id = "loginPage">
    안녕하세요 로그인 페이지 입니다.
  </div>
  <div id= "loginKey">
        <input type="text" placeholder="Enter ID" class="id"> 
        <input type="password" placeholder="Enter PW" class="pw"> 
  </div>
  <div id = "sign">
    
      <button class"=bttnSignup" onclick=""> 회원가입 </button>
    
      <button class="bttnLogin" onclock=""> 로그인 </button>
    
  </div>
   `
 
  
}