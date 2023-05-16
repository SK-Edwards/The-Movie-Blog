const Comment = require('../models/Comment')



const commentData = [
    {
        id: 1,
        content: 'This reminds me of my family and my childhood. Damn what does that say abt us...lol.',
        user_id: 3,
        movie_id: 1,
    },
    {
        id: 2,
        content: 'WTF. My faith in humanity is shaken. I will never watch this again. great movie though',
        user_id: 1,
        movie_id: 6,
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
