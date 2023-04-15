const nodemailer = require('nodemailer')



exports.send = (req, res) => {

    var otp = generateOTP();
    const obj = req.body
    console.log(obj);
   

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"rohit.panicker16@vit.edu",
        pass:"*********"
    },
    tls:{
        rejectUnauthorized: false,
    },
})

transporter.sendMail({
    from:"rohit.panicker16@vit.edu",
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