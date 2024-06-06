function sendEmail(){
    sendEmail.send({
        Host:"XXX@gmail.com",
        Username:"fghrc",
        Password:"password",
        To:"Finalproject@website.com",
        From: "you@mail.com",
        Subject:"xxxxxxx",
        Body:"cvcvcv"
    }).then(
        message=>alert(message)
    );
}