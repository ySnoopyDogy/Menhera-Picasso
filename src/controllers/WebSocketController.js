const { buildAstolfoImage } = require("../renderers/AstolfoRender")
const { buildGadoImage } = require("../renderers/GadoRender")
const { buildPhiloImage } = require("../renderers/PhiloRender")
const { buildShipImage } = require("../renderers/ShipRender")
const { buildTrisalImage } = require("../renderers/TrisalRender")
const { buildMacetavaImage } = require('../renderers/MacetavaRender')
const { buildBlackjackImage } = require('../renderers/BlackjackRender')
const { build8BallImage } = require("../renderers/EightballRender")
const { buildVascoImage } = require('../renderers/VascoRender')
const ProfileSelector = require("../utils/ProfileSelector")

const WebSocketController = async (socket, rawRequest) => {
  const { type, data, id } = JSON.parse(rawRequest.toString());

  switch (type) {
    case 'astolfo': {
      const result = await buildAstolfoImage(data.text)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'philo': {
      const result = await buildPhiloImage(data.text)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'trisal': {
      const { userOne, userTwo, userThree } = data
      const result = await buildTrisalImage(userOne, userTwo, userThree)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'ship': {
      const { linkOne, linkTwo, shipValue } = data
      const result = await buildShipImage(linkOne, linkTwo, shipValue)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'profile': {
      const { user, marry, usageCommands, i18n, type } = data
      const result = await ProfileSelector(user, marry, usageCommands, i18n, type)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'gado': {
      const { image } = data
      const result = await buildGadoImage(image);
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'macetava': {
      const { image, authorName, authorDiscriminator, authorImage } = data
      const result = await buildMacetavaImage(image, authorName, authorDiscriminator, authorImage);
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'blackjack': {
      const { userCards, menheraCards, userTotal, menheraTotal, i18n, aposta, cardTheme, tableTheme, backgroundCardTheme } = data
      const result = await buildBlackjackImage(userCards, menheraCards, userTotal, menheraTotal, i18n, aposta, cardTheme, tableTheme, backgroundCardTheme);
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case '8ball': {
      const { question, type, answer, username } = data
      const result = await build8BallImage(question, answer, type, username);
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
    case 'vasco': {
      const { user, username, quality, position } = data
      const result = await buildVascoImage(user, username, quality, position)
      socket.send(JSON.stringify({ id, res: result.toJSON() }))
      break;
    }
  }
};

module.exports = WebSocketController
