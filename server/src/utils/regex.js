/*
  eslint-disable no-useless-escape
*/
const nameRegex = /^[a-zA-Z]{3,30}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
const phoneRegex = /^[0-9]{10}$/;

module.exports = {
  nameRegex,
  emailRegex,
  passwordRegex,
  phoneRegex,
};
