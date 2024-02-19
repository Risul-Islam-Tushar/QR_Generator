let ImgBox = document.getElementById("Img-box");
let ImgQr = document.getElementById("qr-img");
let inputText = document.getElementById("qr-input");

function qrGenerator() {
  if (inputText.value.length > 0) {
    ImgQr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputText.value;
  } else {
    alert("Enter Your text or url");
  }
}
