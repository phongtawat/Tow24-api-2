import transporter from "../libs/nodemailer.lib.js"

export const sendEmailLogin = async (email) => {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: "คุณได้เข้าสู่ระบบ",
        html: "<b>hello</b><p>คุณได้ login</p>",
        text: "5555",
    });

    console.log("message sent:", info.messageId);
}