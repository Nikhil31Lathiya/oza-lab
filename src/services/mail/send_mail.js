import nodemailer from 'nodemailer'
// import TokenRepository from '../../domain/token/token.repository.js'

export async function SendMail (req, res) {
  const otp = Math.floor(Math.random(4) * 10000)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ozalab.original@gmail.com',
      pass: 'gjgmqbjhdsszrffw'
    }
  })

  // define email options
  const mailOptions = {
    from: 'ozalab.original@gmail.com',
    to: `${req.body.email.toLowerCase()}`,
    subject: 'Verification Email',
    html: `<p>OZA-LAB verification OTP: <b>${otp}</b></p>`
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.json({ message: 'Error While sending email', info })
    } else {
      console.log('Email sent: ' + info.response)
      return res.json({ message: 'email sent successfully', info, sent: true, otp })
    //   return { message: 'email sent successfully' }
    }
  })
}
