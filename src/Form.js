import button from "./sign-in/view/button";
import description from "./sign-in/view/description";
import form from "./sign-in/view/form";
import root from "./sign-in/view/root";
import title from "./sign-in/view/title";

class Form extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    this.formController();

    const view = {
      web: root(),
      title: shadow.appendChild(title()),
      description: shadow.appendChild(description()),
      button: shadow.appendChild(button()),
      form: shadow.appendChild(form()),
    };

    const { input } = view;
    console.log(input);
  }

  formController() {
    const input = document.querySelectorAll("div");

    console.log(input);
    return input;
  }
}

customElements.define("web-form", Form);
