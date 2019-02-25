const bcrypt = require('bcryptjs')

exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return reject(err);
            }
            if (hash) {
                return resolve(hash);
            }
        })
    })
}