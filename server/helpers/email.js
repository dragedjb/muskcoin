const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (userEmail, userName, balance, giftApplied) => {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });

    //Define email content
    const bonusText = giftApplied
    ? `<p><strong>Speial Bonus:</strong> Since you used gift code, $2,000 bonus has been added to your account!</p>`
    : '';

    const mailOptions = {
        from: '"Musk Coin" <no-reply@muskcoin.com>',
        to: userEmail,
        subject: 'Welcome to Muskcoin platform',
        html: `
            <h1>Hi ${userName}, Welcome!</h1>
            <p>You current balance is: <strong>$${balance}</strong></p>
            <br/>
            <p>Best regards, <br/> The Team</p>
        `,
    };

    // send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Welcome emal sent to:' + userEmail);

    }catch (error) {
        console.error('Email error:', error);
    }
};

module.exports = { sendWelcomeEmail };