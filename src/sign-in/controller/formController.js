export default function formController() {
  // const form = document.querySelector("web-form").shadowRoot.querySelector("")

  const form = document
    .querySelector("web-form")
    .shadowRoot.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document
      .querySelector("web-form")
      .shadowRoot.querySelector("form")
      .querySelectorAll("input")
      .item(0);
    const email = document
      .querySelector("web-form")
      .shadowRoot.querySelector("form")
      .querySelectorAll("input")
      .item(1);
    const password = document
      .querySelector("web-form")
      .shadowRoot.querySelector("form")
      .querySelectorAll("input")
      .item(2);

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    return alert(`
      o seu nome é : ${JSON.stringify(user.name)},
      o seu email é : ${JSON.stringify(user.email)},
      a sua senha é : ${JSON.stringify(
        Object.entries(user.password)
          .map((item) => item + 1)
          .concat(" ↢ o item a esquerda é uma hash bem simples")
      )} 
    
    
    `);
  });

  return form;
}
