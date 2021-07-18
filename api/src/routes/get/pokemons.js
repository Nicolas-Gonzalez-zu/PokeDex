var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/pagination", async (req, res) => {
  const { offset } = req.query;
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    .then((r) => {
      res.send(r.data.results);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.get("/searchPokemon", async (req, res) => {
  const { name } = req.query;
  console.log(name);
  let pokemon = name.toLowerCase();
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((r) => {
      res.send(r.data);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send("Pokemon not found")
    });
});

router.get("/pokemon", async (req, res) => {
  let { url } = req.query;
  if (url === undefined) {
    const pokemon = "https://pokeapi.co/api/v2/pokemon/1/";
    await axios
      .get(`${pokemon}`)
      .then((r) => {
        res.send(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    await axios
      .get(`${url}`)
      .then((r) => {
        res.send(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
});

module.exports = router;
