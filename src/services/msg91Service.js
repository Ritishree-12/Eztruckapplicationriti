import axios from 'axios';

const MSG91_API_KEY = 'YOUR_MSG91_API_KEY';
const MSG91_SENDER_ID = 'YOUR_MSG91_SENDER_ID';

const generateOtp = async (mobileNumber) => {
  try {
    const response = await axios.post(
      'https://api.msg91.com/api/v5/otp',
      {
        authkey: MSG91_API_KEY,
        mobile: mobileNumber,
        sender: MSG91_SENDER_ID,
        country: '91', // Change this based on your country code
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating OTP:', error);
    throw error;
  }
};

const verifyOtp = async (mobileNumber, otp) => {
  try {
    const response = await axios.post(
      'https://api.msg91.com/api/v5/otp/verify',
      {
        authkey: MSG91_API_KEY,
        mobile: mobileNumber,
        otp: otp,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};

export { generateOtp, verifyOtp };
