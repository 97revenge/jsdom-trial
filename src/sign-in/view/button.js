export default function button() {
  const button = document.createElement("button");
  button.setAttribute(
    "style",
    `
    position: relative;
    width: 333px;
    height: 60px;
    box-sizing: border-box;
    margin-left: 75px;
    margin-top: 35px;
    background-color: transparent;
    border: 0px transparent;
    `
  );

  const div = document.createElement("div");

  const buttonPrimary = div.cloneNode(false);

  buttonPrimary.setAttribute(
    "style",
    `
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
  `
  );

  const frameOne = div.cloneNode(true);
  frameOne.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9px;
    width: fit-content;
    height: 100%;
    box-sizing: border-box;
  `
  );

  const p = document.createElement("p");
  p.innerHTML = `Sign In With Google`;
  p.setAttribute(
    "style",
    `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    line-height: 175%;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-align: right;
    letter-spacing: -0.1px;
    padding-left:15px;
  `
  );

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yrh1314p2hj-1%3A56?alt=media&token=09484468-d64a-41ee-bf69-73173f1d0cd6"
  );
  img.setAttribute(
    "style",
    `
  position: absolute;
  top: 19px;
  left: 55.7px;
  width: 23px;
  height: 23px;
  
  `
  );

  p.appendChild(img);
  frameOne.appendChild(p);
  buttonPrimary.appendChild(frameOne);
  button.appendChild(buttonPrimary);

  return button;
}
