module.exports = {
  isUserCached(userId) {
    try {
      if (!userId) {
        return false;
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};
