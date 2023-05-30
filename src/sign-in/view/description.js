export default function description() {
  const description = document.createElement("h3");
  description.textContent = `Clarity gives you the blocks and components you need to create a truly professional website.`;
  description.classList.add("description-form");
  description.setAttribute(
    "style",
    `  width: 449px;
    height: 60px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #94a3b8;`
  );

  return description;
}
