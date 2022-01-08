import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
  constructor(){
    super();
    this.setTitle("Log In")
  }
        async getHtml (){
          return `
            <div class = "login_body">
            <div class = "ID_content">
              ID를 입력하시오.
            </div>

            <div class = "sign">
              <a href = "./signup" class = "signup">
                회원가입
              </a>
              <a href = "" class = "signin">
                로그인
              </a>
            </div>
          `;
        }
      }