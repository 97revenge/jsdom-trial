import remember from "./remember-me";

export default function form() {
  const div = document.createElement("div");

  const form = document.createElement("form");

  const groupOne = form.cloneNode(true);
  groupOne.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  `
  );

  const inputContainer = div.cloneNode();
  inputContainer.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    border-radius: 35px;
    box-sizing: border-box;
    margin-top: 45px;
`
  );

  const label = document.createElement("label");
  const classLabel = `
  display:flex;
  flex-direction:column;
  color: rgba(228, 228, 231, 1);
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  gap:10px;
    `;

  const nameLabel = label.cloneNode(false);
  nameLabel.setAttribute("style", classLabel);
  nameLabel.innerHTML = `Name and LastName `;

  const emailLabel = label.cloneNode(false);
  emailLabel.setAttribute("style", classLabel);
  emailLabel.innerHTML = `Email Adress  `;

  const passwordLabel = label.cloneNode(false);
  passwordLabel.setAttribute("style", classLabel);
  passwordLabel.innerHTML = `your password `;

  const frameTwo = div.cloneNode(false);
  const classInput = `
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
  margin-bottom:5px;
  `;
  frameTwo.setAttribute("style", classInput);
  const appendLabel = {
    name: frameTwo.cloneNode(true),
    email: frameTwo.cloneNode(true),
    password: frameTwo.cloneNode(true),
  };

  const { name, email, password } = appendLabel;

  const input = document.createElement("input");

  const formInput = input.cloneNode(true);

  const inputClass = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 449px;
  height: 30px;
  border-radius: 35px;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  border: none;
  padding-left: 15px;
  background-color: transparent;
  color: white;
  `;

  formInput.setAttribute("style", inputClass);

  const appendInput = {
    nameInput: formInput.cloneNode(true),
    emailInput: formInput.cloneNode(true),
    passwordInput: formInput.cloneNode(true),
  };

  const { nameInput, emailInput, passwordInput } = appendInput;
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "your name and last name");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("placeholder", "your e-mail");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "your password");

  const check = div.cloneNode(true);
  check.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 5px;
    width: 500px;
    box-sizing: border-box;
  `
  );

  const shape = input.cloneNode(true);
  shape.setAttribute(
    "style",
    `
    
    width: 19px;
    height: 19px;
    border: 1px solid rgba(51, 65, 85, 1);
    border-radius: 5px;
    box-sizing: border-box;
  
    `
  );
  shape.setAttribute("type", "checkbox");

  const p = document.createElement("p");
  p.setAttribute(
    "style",
    `
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    line-height: 157%;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    margin-top: 20px;
    margin: 0px;
    `
  );
  p.innerHTML = `Remember me 💭`;

  const button = document.createElement("button");
  button.setAttribute(
    "style",
    `    display: flex;
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
  margin-top: 20px;
  margin-left: 150px;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  line-height: 175%;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  text-align: right;
  letter-spacing: -0.2px;
  
  `
  );
  button.type = "submit";
  button.innerHTML = `Create Account`;

  check.appendChild(shape);
  check.appendChild(p);

  name.appendChild(nameInput);
  email.appendChild(emailInput);
  password.appendChild(passwordInput);

  nameLabel.appendChild(name);
  emailLabel.appendChild(email);
  passwordLabel.appendChild(password);

  inputContainer.appendChild(nameLabel);
  inputContainer.appendChild(emailLabel);
  inputContainer.appendChild(passwordLabel);
  inputContainer.appendChild(check);

  groupOne.appendChild(inputContainer);

  groupOne.appendChild(button);

  groupOne.appendChild(remember());

  return groupOne;
}
