// smsService.js
export const sendConfirmationSMS = (phoneNumber, bookingDetails) => {
    const message = `Your booking is confirmed: ${bookingDetails}`;
  
    // Replace this URL with the actual API endpoint for sending SMS (e.g., Twilio API)
    fetch('https://api.twilio.com/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('your_account_sid:your_auth_token'), // This is how you usually authenticate for services like Twilio
      },
      body: JSON.stringify({
        to: phoneNumber,
        message: message,
        from: 'YourAppName', // Your Twilio number or the service name
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('SMS Sent:', data);
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
    });
  };
  