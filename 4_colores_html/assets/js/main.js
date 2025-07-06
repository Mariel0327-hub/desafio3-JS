const ids = ["azul", "rojo", "verde", "amarillo"];
ids.forEach(id => {
  const div = document.getElementById(id);
  div.addEventListener("click", function () {
    div.style.backgroundColor = "black";
  });
});

const keyDiv = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  const tecla = event.key;

  if (tecla === "a") {
    keyDiv.style.backgroundColor = "pink";
  } else if (tecla === "s") {
    keyDiv.style.backgroundColor = "orange";
  } else if (tecla === "d") {
    keyDiv.style.backgroundColor = "skyblue";
  }

  if (["q", "w", "e"].includes(tecla)) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.marginTop = "10px";

    if (tecla === "q") nuevoDiv.style.backgroundColor = "purple";
    if (tecla === "w") nuevoDiv.style.backgroundColor = "gray";
    if (tecla === "e") nuevoDiv.style.backgroundColor = "brown";

    document.body.appendChild(nuevoDiv);
  }
});