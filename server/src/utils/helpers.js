const {
  v4: uuidv4,
} = require('uuid');

const genUniqUsername = function genUniqUsername() {
  const username = uuidv4();
  return username;
};

module.exports = {
  genUniqUsername,
};
