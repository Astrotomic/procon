const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { identifier, key, value } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.SetPlayerData(identifier, key, value));
};
