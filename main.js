const form = document.querySelector("#button");
const inserir = document.querySelector("#list");
const valor = document.querySelector("#valor");
form.addEventListener("click", (e) => {
  if (valor.value) {
    inserir.innerHTML += `
        <div class="item">
                  <input type="checkbox">
                  <p>${valor.value}</p>
          </div>
        `;
  }

  valor.value = "";
});
