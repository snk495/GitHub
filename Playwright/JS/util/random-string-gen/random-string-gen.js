const generateRandomString = function(length = 6){
    return Math.random().toString(20).slice(2, 2 + length)
    }

module.exports = generateRandomString;