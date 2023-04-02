const nodemailer = require('nodemailer')

exports.send = (req, res) => {
    const obj = req.body
    console.log(obj);
    console.log('send mail');

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"rohitpanicke06@gmail.com",
        pass:"Welcometopune18@"
    },
    tls:{
        rejectUnauthorized: false,
    },
})

transporter.sendMail({
    from:"rohitpanicke06@gmail.com",
    to:"panicker.r@northeastern.edu",
    subject:"Test",
    text:"Hi..."+"This email"+obj.username+"   "+obj.query
});
res.json({msg:"successfully"});
}