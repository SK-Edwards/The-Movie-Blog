const User = require('../models/User')



const userData = [{

    id: 1,
    username: 'sungwookong_DA-GOD',
    password: 'mongooseIsland24'
},
{
    id: 2,
    username: 'metatron_DA-SCRIBE',
    password: 'num1scribeofGOD'
},
{
    id: 3,
    username: 'gabriel_DA-ANGEL',
    password: 'bigWings02'
}
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
