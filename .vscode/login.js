const $ = document;

export default function getHtml(root){
  

  root.innerHTML =
  
  `
  <div class = "loginPage">
    안녕하세요 로그인 페이지 입니다.
  </div>

  <div class= "loginKey">
      ID  <input type="text" placeholder="Enter ID"> 
      PW  <input type="password" placeholder="Enter PW"> 
  </div>

  <div class = "sign">
    <a href = "./signup" class = "signup">
      회원가입
    </a>
    <a href = "" class = "signin">
      로그인
    </a>
  </div>

   `
  root.appendChild(body);
  
}
