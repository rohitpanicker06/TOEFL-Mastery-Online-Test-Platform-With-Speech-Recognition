const nodemailer = require('nodemailer')



exports.send = (req, res) => {
    var otp = generateOTP();
    const obj = req.body
    console.log(obj);
    console.log('send mail');

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"rohit.panicker16@vit.edu",
        pass:"welcometopune18"
    },
    tls:{
        rejectUnauthorized: false,
    },
})

transporter.sendMail({
    from:"rohit.panicker16@vit.edu",
    to:"rohitpanicker06@gmail.com",
    subject:"OTP: Verification Code",
    text:"Hi..."+"This email"+otp+"   "+obj.query
});
res.json({msg:"successfully",
"otp":otp});
}

function generateOTP(){
    return Math.random().toString().substr(2, 6);
}