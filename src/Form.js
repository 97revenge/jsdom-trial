import button from "./sign-in/view/button";
import description from "./sign-in/view/description";
import form from "./sign-in/view/form";
import root from "./sign-in/view/root";
import title from "./sign-in/view/title";

class Form extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    return {
      web: root(),
      title: shadow.appendChild(title()),
      description: shadow.appendChild(description()),
      button: shadow.appendChild(button()),
      form: shadow.appendChild(form()),
    };
  }
}

customElements.define("web-form", Form);
