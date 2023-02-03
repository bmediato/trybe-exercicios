const validationDescription = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  if (!createdAt) return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  if (!rating) return res.status(400).json({ message: 'O campo rating é obrigatório' });
  if (!difficulty) return res.status(400).json({ message: 'O campo diffidulty é obrigatório' });
  next();
};

module.exports = validationDescription;