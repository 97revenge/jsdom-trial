class Example extends HTMLElement {
  constructor() {
    super();

    this.callbackStatic();
  }
  callbackStatic() {
    const div = (document.createElement("div").innerHTML = "Hello");
    document.body.appendChild(div);
  }
}
