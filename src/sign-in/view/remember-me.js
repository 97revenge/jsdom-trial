export default function remember() {
  const remember = document.createElement("p");
  remember.innerHTML = `Don't have an account? `;
  remember.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: row;
    color: rgba(100, 116, 139, 1);
    font-size: 14px;
    line-height: 157%;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    margin-left: 70px;
    margin-top:25px;
    
    
    `
  );

  const a = document.createElement("a");
  a.innerHTML = `<u>create a free acount ✨</u>`;
  a.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: row;
    color: rgba(100, 116, 139, 1);
    font-size: 14px;
    line-height: 157%;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    margin-left: 70px;
    
    
    `
  );

  remember.appendChild(a);

  return remember;
}
