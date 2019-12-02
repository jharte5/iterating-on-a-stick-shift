const makeDino = function(species, period, carnivore, extinct = false) {
  const dino = {
  species, 
  period, 
  carnivore,
  extinct,
  }
  return dino
}

const makeSingular = function(dino) {
  if (!dino.species.endsWith('us')) {
    return dino
  } else {
    return dino = {
      species: dino.species.slice(0,-2),
      period: dino.period,
      carnivore: dino.carnivore,
      extinct: dino.extinct,
    }
      
  }
}

const truncateSpecies = function() {
  
}

const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}