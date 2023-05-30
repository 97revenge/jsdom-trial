export default function title() {
  const title = document.createElement("h1");
  title.innerHTML = `Join Today 🎉✨🎉`;
  title.setAttribute(
    "style",
    `width: fit-content;
    height: 62px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 62px;
    letter-spacing: -2px;
    margin-left: 0px;
    color: #94a3b8;`
  );
  return title;
}
