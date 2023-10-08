const admin = require("firebase-admin")
admin.initializeApp()

const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:"augxy444@gmail.com",
        pass:"trjnlhpmulyqgkcj"
    }
});


exports.sendEmail = functions.firestore
        .document('todos/')
        .onCreate((snap,context)=>{
            const mailOptions = {
                from: "augxy444@gmail.com",
                to: snap.data().email,
                subject: 'Attendance Details',
                html: `<h1>Attendance Details</h1>
                        <p>${snap.data()}</p>`
            };
        })



return transporter.sendMail(mailOptions,(error,data)=> {
    if(error) {
        console.log(error)
        return
    }
    console.log("Send!")
});