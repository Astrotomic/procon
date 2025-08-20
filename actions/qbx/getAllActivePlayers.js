const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { identifier } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetPlayersData());
};
