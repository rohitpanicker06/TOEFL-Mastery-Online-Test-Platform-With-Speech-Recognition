const nodemailer = require('nodemailer')

exports.send = (req, res) => {

    var otp = generateOTP();
    const obj = req.body
    console.log("boddy:",obj);
   

let transporter = nodemailer.createTransport({
    //service:"gmail",
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth:{
        user:"mayurkhandetod@gmail.com",
        pass:"fyLnIBGVpdh9JY4W"
    },
    tls:{
        rejectUnauthorized: false,
        ciphers: "SSLv3"
    },
})

transporter.sendMail({
    from:"mayurkhandetod@gmail.com",
    to: obj.email,
    subject:"OTP: Verification Code",
    text:"Welcome "+ obj.email+ " Your OTP is : "+otp+"   "
});
res.json({msg:"OTP Sent Successfully",
"otp":otp});
}

function generateOTP(){
    return Math.random().toString().substr(2, 6);
}