function click(){
    let url =
      "https://wa.me/917604913189?text=" + // Ubah nomor whatsapp dengan nomor kalian
      "Name : " + name + "%0a" +
      "Email : " + email + "%0a" +
      "Phone : " + phone + "%0a" + "%0a" +
      "Message : " + "%0a" + message;
  
    window.open(url, "_black").focus();
  }