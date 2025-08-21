const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { identifier, key, value } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.SetPlayerData(identifier, key, value));
};
