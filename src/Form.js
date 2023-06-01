import formController from "./sign-in/controller/formController";
import button from "./sign-in/view/button";
import description from "./sign-in/view/description";
import form from "./sign-in/view/form";
import root from "./sign-in/view/root";
import title from "./sign-in/view/title";

class Form extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const view = {
      web: root(),
      title: shadow.appendChild(title()),
      description: shadow.appendChild(description()),
      button: shadow.appendChild(button()),
      form: shadow.appendChild(form()),
    };

    const controller = {
      form: formController(),
    };
  }
}

customElements.define("web-form", Form);
