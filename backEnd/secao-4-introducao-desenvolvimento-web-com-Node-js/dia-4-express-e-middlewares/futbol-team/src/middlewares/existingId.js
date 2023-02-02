const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((idTeam) => idTeam.id === id)) {
    next();
  } else {
    res.status(404).send({ message: 'Id não encontrado' });
  }
};

module.exports = { existingId };