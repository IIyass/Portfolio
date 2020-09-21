const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

templates = {
  password_reset_confirm: "d-a02ad738dfc8404c8da016b46a754805",
  password_reset: "d-e779dcfad7fb47e7be8d79bdfe75fb0c",
  confirm_account: "d-68c570dd120044d894e07566bf951964",
}
