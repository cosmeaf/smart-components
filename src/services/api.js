// src/services/api.js
const users = require("../data/userDataMock");

function login(email, password) {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      const response = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: user.token,
      };
      resolve({ status: 200, data: response });
    } else {
      reject({ status: 401, message: "Unauthorized" });
    }
  });
}

function register(first_name, last_name, email, password) {
  return new Promise((resolve, reject) => {
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      reject({ status: 409, message: "Email already exists" });
    } else {
      const newUser = {
        id: users.length + 1,
        first_name,
        last_name,
        email,
        password,
        token: "newAuthTokenHere",
      };
      users.push(newUser);
      resolve({ status: 201, message: "User registered successfully" });
    }
  });
}

function recovery(email) {
  return new Promise((resolve, reject) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    resolve({ status: 200, otp: otp.toString() });
  });
}

function otpValidate(otp) {
  return new Promise((resolve, reject) => {
    if (otp === "000000") {
      const systemURL = window.location.href;
      resolve({ status: 200, url: `${systemURL}/change-password/` });
    } else {
      reject({ status: 400, message: "Invalid OTP" });
    }
  });
}

function changePassword(password, passconf) {
  return new Promise((resolve, reject) => {
    if (password !== passconf) {
      reject({
        status: 400,
        message: "Password and confirmation do not match",
      });
    } else {
      resolve({ status: 200, message: "Password changed successfully" });
    }
  });
}

module.exports = {
  login,
  register,
  recovery,
  otpValidate,
  changePassword,
};
