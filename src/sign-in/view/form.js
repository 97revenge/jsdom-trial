export default function form() {
  const div = document.createElement("div");

  const form = document.createElement("form");

  const groupOne = form.cloneNode();
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
  color: rgba(228, 228, 231, 1);
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
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
  `;
  frameTwo.setAttribute("style", classInput);
  const appendLabel = {
    name: frameTwo.cloneNode(true),
    email: frameTwo.cloneNode(true),
    password: frameTwo.cloneNode(true),
  };

  const { name, email, password } = appendLabel;

  const input = document.createElement("input");
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

  input.setAttribute("style", inputClass);

  const appendInput = {
    nameInput: input.cloneNode(true),
    emailInput: input.cloneNode(true),
    passwordInput: input.cloneNode(true),
  };

  const { nameInput, emailInput, passwordInput } = appendInput;

  name.appendChild(nameInput);
  email.appendChild(emailInput);
  password.appendChild(passwordInput);

  nameLabel.appendChild(name);
  emailLabel.appendChild(email);
  passwordLabel.appendChild(password);

  inputContainer.appendChild(nameLabel);
  inputContainer.appendChild(emailLabel);
  inputContainer.appendChild(passwordLabel);
  groupOne.appendChild(inputContainer);

  return groupOne;
}
