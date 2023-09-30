const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const sendSms = (message: string, to: string) => {
    console.log(message, to);

    client.messages
        .create({
            body: message,
            from: '+12565790289',
            to: to
        })
        .then((message: any) => console.log(message.sid));
};