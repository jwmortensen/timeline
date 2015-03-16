var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "janesequoia@gmail.com",
    pass: "jane2014"
  }
});

exports.sendApproval = function(name, email) {
  smtpTransport.sendMail({
    from: "Jacob Mortensen <janesequoia@gmail.com>",
    to: name + " " + "<" + email + ">",
    subject: "Welcome!",
    html: "<h1>Hello!</h1><p>We're happy to say that we know you and you can now log in to <a href=\"http://janesequoia.com\">janesequoia.com</a></p>"
  })
  console.log("Sending approval to " + email);
  return;
}; 
