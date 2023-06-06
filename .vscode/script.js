function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img") // pegando o seletor de imagem do css
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagemlight
    img.setAttribute("src", "/assets/avatar-light.png")
  } else {
    // se enão tiver light mode, manter a imagem normal/
    img.setAttribute("src", "/assets/avatar.png")
  }
}
