const accNames = [5624, 5893, 9225];

module.exports = {
  validateAcc: (accNum) => {
    accNames.forEach((acc) => {
      if (acc === accNum) {
        return true;
      }
    });
    return false;
  },
};
