const ColorService = require('../services/color.service.ts');
import { Request, Response } from 'express';

const getColors = (req: Request, res: Response) => {
  const colors = ColorService.getColors();

  res.send(colors);
}; 

module.exports = {
  getColors,
};
