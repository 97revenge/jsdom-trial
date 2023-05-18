import "./style.css";

export default function App() {
  document.querySelector("#app").innerHTML = `
  <div>

  </div>
`;
}

App();

class webComponent extends HTMLElement {
  constructor() {
    super();

    this.allText = {
      title: "Join Today 🎉✨🎉",
      description:
        "Clarity gives you the blocks and components you need to create a truly professional website.",
      buttonName: "Sign up with Google",
      label: ["Name and LastName ", "Email Adress ", "Password "],
      remember: "Remember me 💭",
      createAcount: "Create Account",
      doYouHave: "Don't have an account? ",
      createFree: "Create free account ✨",
    };

    const {
      label: [one, two, tree],
    } = this.allText;

    this.one = one;
    this.two = two;
    this.tree = tree;

    this.app();
  }

  app() {
    const paragraphLink = document.createElement("a");
    paragraphLink.href = "https://github.com/97revenge";
    paragraphLink.textContent = this.allText.createFree;
    paragraphLink.classList.add("don-thave-an-account-cre");

    const paragraphAccount = document.createElement("p");
    paragraphAccount.classList.add("don-thave-an-account-cre");
    paragraphAccount.textContent = this.allText.doYouHave;

    const paragraphCreate = document.createElement("p");
    paragraphCreate.classList.add("button-name");
    paragraphCreate.textContent = this.allText.createAcount;

    const buttonCreate = document.createElement("div");
    buttonCreate.classList.add("button-create");

    const buttonPrimary = document.createElement("button");
    buttonPrimary.classList.add("button-primary-create");
    buttonPrimary.setAttribute("type", "submit");

    const paragraphShape = document.createElement("p");
    paragraphShape.classList.add("remember-me");
    paragraphShape.textContent = this.allText.remember;

    const shape = document.createElement("input");
    shape.classList.add("shape");
    shape.setAttribute("type", "checkbox");

    const check = document.createElement("div");
    check.classList.add("check");

    const containerInput = document.createElement("div");
    containerInput.classList.add("input-content");

    const groupOne = document.createElement("div");
    groupOne.classList.add("group-one"); // group-388

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const styleFrameName = document.createElement("div");
    styleFrameName.classList.add("frame-2");

    const inputNameLabel = document.createElement("label");
    inputNameLabel.classList.add("input-label");
    inputNameLabel.textContent = this.one;

    const inputNameText = document.createElement("input");
    inputNameText.classList.add("input-style");
    inputNameText.setAttribute("placeholder", "first and last name");
    inputNameText.setAttribute("type", "text");

    const styleFrameEmail = document.createElement("div");
    styleFrameEmail.classList.add("frame-2");

    const inputEmailContainer = document.createElement("div");
    inputEmailContainer.classList.add("input-container");

    const inputEmailLabel = document.createElement("label");
    inputEmailLabel.classList.add("input-label");
    inputEmailLabel.textContent = this.two;

    const inputEmailText = document.createElement("input");
    inputEmailText.classList.add("input-style");
    inputEmailText.setAttribute("placeholder", "your email");
    inputEmailText.setAttribute("type", "text");

    const styleFramePassword = document.createElement("div");
    styleFramePassword.classList.add("frame-2");

    const inputPasswordContainer = document.createElement("div");
    inputPasswordContainer.classList.add("input-container");

    const inputPasswordLabel = document.createElement("label");
    inputPasswordLabel.classList.add("input-label");
    inputPasswordLabel.textContent = this.tree;

    const inputPasswordText = document.createElement("input");
    inputPasswordText.classList.add("input-style");
    inputPasswordText.setAttribute("type", "password");
    inputPasswordText.setAttribute("placeholder", "your password...");

    const google = document.createElement("div");
    google.classList.add("button");

    const btnPrimary = document.createElement("div");
    btnPrimary.classList.add("button-primary");

    const frameOne = document.createElement("div");
    frameOne.classList.add("frame-1");

    const signIn = document.createElement("p");
    signIn.classList.add("button-name");
    signIn.textContent = this.allText.buttonName;

    const googleIcon = document.createElement("img");
    googleIcon.setAttribute(
      "src",
      "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yrh1314p2hj-1%3A56?alt=media&token=09484468-d64a-41ee-bf69-73173f1d0cd6"
    );
    googleIcon.classList.add("google-icon");

    const description = document.createElement("h3");
    description.textContent = this.allText.description;
    description.classList.add("description-form");

    const title = document.createElement("h1");
    title.textContent = this.allText.title;
    title.classList.add("title-form");

    const forms = document.createElement("div");
    forms.classList.add("container-forms");

    forms.appendChild(title);
    forms.appendChild(description);
    signIn.appendChild(googleIcon);
    frameOne.appendChild(signIn);
    btnPrimary.appendChild(frameOne);
    google.appendChild(btnPrimary);
    forms.appendChild(google);
    forms.appendChild(containerInput);
    containerInput.appendChild(groupOne);
    groupOne.appendChild(inputContainer);

    inputContainer.appendChild(inputNameLabel);
    inputNameLabel.appendChild(styleFrameName);
    styleFrameName.appendChild(inputNameText);

    groupOne.appendChild(inputEmailContainer);
    inputContainer.appendChild(inputEmailLabel);
    inputEmailLabel.appendChild(styleFrameEmail);
    styleFrameEmail.appendChild(inputEmailText);
    groupOne.appendChild(inputPasswordContainer);
    inputContainer.appendChild(inputPasswordLabel);
    inputPasswordLabel.appendChild(styleFramePassword);
    styleFramePassword.appendChild(inputPasswordText);
    inputContainer.appendChild(check);
    check.appendChild(shape);
    check.appendChild(paragraphShape);
    inputContainer.appendChild(buttonPrimary);
    buttonPrimary.appendChild(buttonCreate);
    buttonCreate.appendChild(paragraphCreate);
    inputContainer.appendChild(paragraphAccount);
    paragraphAccount.appendChild(paragraphLink);
    // o que importa na renderizacao é isso aqui ....

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l0h91qbeay9-1%3A72?alt=media&token=e4433b87-4630-44c1-bea2-addda4851a9d"
    );
    img.classList.add("image-login");
    img.classList.add("image-animate");

    const div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("bg-pan-right");

    div.innerHTML = `
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");


      .container {
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        background-color: rgba(15, 23, 42);
        height:970px;
        width:1440px;
        margin-left:200px;

        box-shadow:15px;
        border-radius:20px;
      }
      .image-login{
        display:flex;
        width: 570px;
        height: 787px;
        margin-top: 110px;
        padding-left: 70px;
      }
      .image-animate:hover {
        -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
                animation: pulsate-fwd 0.5s ease-in-out infinite both;
      }

@-webkit-keyframes image-animate:hover {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


      .container-forms {
        
        flex-direction:column;
        justify-content:center;
        margin-left:120px;
        margin-top:50px;
      }
      .title-form {
        width: fit-content;
        height: 62px;
        font-family:Poppins, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 52px;
        line-height: 62px;
        letter-spacing: -2px;
        margin-left: 0px;
        color:#94a3b8;
      }
      .description-form {
        width: 449px;
        height: 60px;
        font-family:Poppins, sans-serif;
        font-style: normal;
        font-weight: 400;
  	    font-size: 18px;
        line-height: 30px;
        color: #94A3B8;
      }
      .button {
        position: relative;
        width: 444px;
        height: 60px;
        box-sizing: border-box;
        margin-left:40px;
        margin-top:35px;
      }

      .button-primary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding: 16px;
        border-radius: 35px;
        box-sizing: border-box;
        background-color: rgba(30, 41, 59, 1);
      }

      .frame-1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 9px;
        width: fit-content;
        height: 100%;
        box-sizing: border-box;
      }

      .button-name {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        line-height: 175%;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        text-align: right;
        letter-spacing: -0.2px;
      }

      .google-icon {
        position: absolute;
        top: 19px;
        left: 106.7px;
        width: 23px;
        height: 23px;
      }

      .input-content {
        width: 449px;
        height: 497px;
        box-sizing: border-box;
      }

      .group-one {
        display:flex;
        flex-direction:column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      .input-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        border-radius: 35px;
        box-sizing: border-box;
        margin-top:45px;
      ;
      }
      .input-label {
        color: rgba(228, 228, 231, 1);
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        font-family:Poppins, sans-serif;
        
      }

      .frame-2 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 13px;
        width: 100%;
        height: 60px;
        padding: 15px 20px;
        border: 1px solid rgba(51, 65, 85, 1);
        border-radius: 35px;
        box-sizing: border-box;
      }


      .input-style {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        width: 449px;
        height:30px;
        border-radius: 35px;
        box-sizing: border-box;
        font-family:Poppins, sans-serif;
        border:none;
        padding-left:15px;
        background-color: transparent;
        color:white;
        
      }
      
      .check {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content:center;
        gap:5px;

        width: 500px;
        box-sizing: border-box;
      }

      .shape {
        width: 19px;
        height: 19px;
        border: 1px solid rgba(51, 65, 85, 1);
        border-radius: 5px;
        box-sizing: border-box;
      }

      .remember-me {
        
       color: rgba(255, 255, 255, 1);
        font-size: 14px;
        line-height: 157%;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        margin-top:20px;
        margin:0px;
      }


      .button-primary-create {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 201px;
        height: 55px;
        padding: 16px;
        border-radius: 50px;
        box-sizing: border-box;
        background-color: rgba(37, 99, 235, 1);
        margin-top:20px;
        margin-left:150px;
      }

      .button-create {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 9px;
        width: fit-content;
        box-sizing: border-box;
        background-color:transparent;
        border : 0;
      }

      .button-create {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        line-height: 175%;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        text-align: center;
        letter-spacing: -0.2px;
      }

      .don-thave-an-account-cre {
        display:flex;
        flex-direction:row;
        color: rgba(100, 116, 139, 1);
        font-size: 14px;
        line-height: 157%;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        margin-left: 70px;
        
      }

      input::placeholder {
        color: white;
      }


    </style>
    `;

    div.appendChild(img);
    div.appendChild(forms);

    this.attachShadow({ mode: "open" }).appendChild(div);
  }
}

customElements.define("web-component", webComponent);
