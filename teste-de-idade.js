function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector("#txtano");
  var res = document.querySelector("#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "/Img/criança1.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "/Img/jovem1.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/Img/Adulto1.jpg");
      } else {
        //idoso
        img.setAttribute("src", "Img/Idoso1.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "/Img/criança2.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "/Img/jovem2.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/Img/adulto2.jpg");
      } else {
        //idoso
        img.setAttribute("src", "/Img/Idoso2.jpg");
      }
    }
    res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`;
    res.appendChild(img);
  }
}
