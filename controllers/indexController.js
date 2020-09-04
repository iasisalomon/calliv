const fs = require('fs');

module.exports = {
    root: (req, res) => {
      hola = fs.readFileSync('../raw_data.csv')
        return res.send (hola)
    },
}