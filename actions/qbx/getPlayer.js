const fetchqbxplayer = require('../../utils/fetchqpxplayer');

module.exports = (data) => {
    const { source } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetPlayer(source));
};
