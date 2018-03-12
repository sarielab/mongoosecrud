require("dotenv").config()

const CryptoJS = require("crypto-js")

//bikin password jelek buat simpen di database
const hashPassword = function(password){
  let hashPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
  return hashPassword
}

//bikin cek password
const checkPassword = function(password, hashPassword){
  let plainPassword = CryptoJS.AES.decrypt(hashPassword, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
  return password === plainPassword;
}

module.exports = {
  hashPassword,
  checkPassword
}