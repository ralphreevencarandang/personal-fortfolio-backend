import { transporter } from "../config/nodeMailer.js"

export const sendEmail = async (req, res)=>{

    try {
         const {name, email, subject, message} = req.body

         if(!name || !email || !subject || !message){
            res.status(422).json({message: 'Input fields are required'});
            return
         }

        await transporter.sendMail({
            from: `"${name} - ${email}" <${process.env.SMTP_SENDER}>`,
            to: process.env.MY_EMAIL,
            subject: subject,
            text: message, 
        })

        res.status(201).json({message: "Email successfully send!"})
        
    } catch (error) {
        console.log('Error in Send Email Controller', error);
        res.status(500).json({message: 'Internal server error'})
        
    }
   
}