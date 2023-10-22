import { Color } from "../models/Color";

export const getAll = () => {
  return Color.findAll();
}
