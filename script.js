const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQrCodeBtn = document.querySelector(".generate-qr-code-btn");
const errorMessageText = document.querySelector(".error-message-text");

generateQrCodeBtn.addEventListener("click", () => {
  validateInputField();
});

function validateInputField() {
  if (qrTextInput.value.trim().length > 0) {
    showLoading();
    generateQrCode();
  } else {
    clearQRCode();
    errorMessageText.textContent = "Enter text and use some URL to generate QR Code";
  }
}

function generateQrCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrTextInput.value,
    height: 400,
    width: 400,
    colorLight: "#fff",
    colorDark: "#000",
  });

  setTimeout(() => {
    hideLoading();
    qrTextInput.value = "";
    errorMessageText.textContent = "";
  }, 1000); // Simulating a delay for demonstration purposes
}

function showLoading() {
    qrContainer.innerHTML = '<div class="loading"></div>';
  }
  
  function hideLoading() {
    const loadingElement = qrContainer.querySelector('.loading');
    if (loadingElement) {
      qrContainer.removeChild(loadingElement);
    }
  }
  
function clearQRCode() {
  qrContainer.innerHTML = "";
}
