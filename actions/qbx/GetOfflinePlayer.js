const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { citizenid } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetOfflinePlayer(citizenid));
};
