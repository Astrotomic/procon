const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { identifier } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.UpdatePlayerData(identifier));
};
