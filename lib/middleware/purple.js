module.exports = (req, res, next) => {
  req.colors.push('purple');
  next();
};
