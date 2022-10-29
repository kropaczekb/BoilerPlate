const app = require('./server')
const db = require('./server/db')
const PORT = process.env.PORT || 1337;

db.sync()
  .then(function(){
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  });
