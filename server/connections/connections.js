const mongoose = require('mongoose')
const db1 = require('../config/key').mongoUsersURI;
const db2 = require('../config/key').mongoLevelsURI;
<<<<<<< HEAD
const db3 = require('../config/key').mongoRandomURI;
const users = mongoose.createConnection(db1,{ useNewUrlParser: true });
const levels = mongoose.createConnection(db2,{ useNewUrlParser: true });
const random = mongoose.createConnection(db3, { useNewUrlParser: true });

module.exports = {users,levels,random};
=======
const users = mongoose.createConnection(db1,{ useNewUrlParser: true });
const levels = mongoose.createConnection(db2,{ useNewUrlParser: true });

module.exports = {users,levels};
>>>>>>> 2568f5a11c56575d3740806db9b69ca3443a94ae
