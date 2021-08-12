const fs = require('fs')

const returnBuferedImage = (image) => {
  return fs.readFileSync(`src/assets/images/${image}.png`)
}

const returnCardsBufferedImage = (image) => {
  return fs.readFileSync(`src/assets/cards/${image}.png`)
}

// Default
const getAp = () => returnBuferedImage('ap');
const getArmor = () => returnBuferedImage('armor');
const getAstolfo = () => returnBuferedImage('astolfo');
const getBadgeOne = () => returnBuferedImage('badge1');
const getBalance = () => returnBuferedImage('balance');
const getBanido = () => returnBuferedImage('banido');
const getBirthday = () => returnBuferedImage('birthday');
const getBravery = () => returnBuferedImage('bravery');
const getBrilliance = () => returnBuferedImage('brilliance');
const getClass = () => returnBuferedImage('class');
const getDamage = () => returnBuferedImage('damage');
const getDeveloper = () => returnBuferedImage('developer');
const getGem = () => returnBuferedImage('gem');
const getBoleham = () => returnBuferedImage('boleham')
const getHeart = () => returnBuferedImage('heart');
const getHundred = () => returnBuferedImage('hundred');
const getJob = () => returnBuferedImage('job');
const getLevel = () => returnBuferedImage('level');
const getMana = () => returnBuferedImage('mana');
const getRpg = () => returnBuferedImage('rpg');
const getMenheraDev = () => returnBuferedImage('menheradev');
const getPhilo = () => returnBuferedImage('philo');
const getRing = () => returnBuferedImage('ring');
const getStatus = () => returnBuferedImage('status');
const getVote = () => returnBuferedImage('vote');
const getXp = () => returnBuferedImage('xp');
const yellowFilter = () => returnBuferedImage('filter');
const getGado = () => returnBuferedImage('gado');
const getMacetava = () => returnBuferedImage('macetava');

//  Cards

const getTable = () => returnCardsBufferedImage('table');
const getHidden = () => returnCardsBufferedImage('hidden');
const getCardByID = (cardID) => returnCardsBufferedImage(cardID)


module.exports = {
  getAp,
  getBadgeOne,
  getBalance,
  getBirthday,
  getBanido,
  getMenheraDev,
  getBravery,
  getBrilliance,
  getDeveloper,
  getArmor,
  getRpg,
  getAstolfo,
  getClass,
  getGado,
  getBoleham,
  getDamage,
  getGem,
  getHeart,
  getHundred,
  getJob,
  getLevel,
  getMana,
  yellowFilter,
  getPhilo,
  getRing,
  getVote,
  getStatus,
  getXp,
  getMacetava,
  getTable,
  getCardByID,
  getHidden,
}
