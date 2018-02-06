const validAccounts = [5624, 5893, 9225];

module.exports = {
  validateAcc: accNum => validAccounts.includes(accNum),
};
