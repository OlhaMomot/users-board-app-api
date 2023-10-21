const ColorService = require('../services/color.service.ts');

const getColors = (req, res) => {
  const colors = ColorService.getColors();

  res.send(colors);
}; 

module.exports = {
  getColors,
};
