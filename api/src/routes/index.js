const { Router } = require("express");
const getPokemons = require("./get/pokemons");

const router = Router();

router.use("/pokemons", getPokemons);

module.exports = router;
