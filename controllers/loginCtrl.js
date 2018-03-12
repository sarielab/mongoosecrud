const Orang = require('../models/orang')
const auth = require('../helpers/auth')

const login = function(req, res) {
  Orang.findOne({nama: req.body.nama})
  .exec(function(err, orang){
    if (err) res.send({err: 'Invalid name/password'})
    else {
      let is_login = auth.checkPassword(req.body.password, orang.password)
      if (!is_login) res.send({err: 'Invalid name/password'})
      else {
        // res.send('Login!')

        //create token
        /* kita ga mau kasi liat password */
        let orang_dt = {
          nama: orang.nama
        }
        let token = auth.createToken(orang_dt)

        res.send({token: token})
      }
    }
  })
}
const register = function(req, res) {
  let hashed_password = auth.hashPassword(req.body.password)
  let orang = new Orang({
    nama: req.body.nama,
    password: hashed_password
  })

  orang.save(function(err, s_orang){
    if (err) res.send({err:err})
    else res.send(s_orang)
  })
}

module.exports = {
  login,
  register
}