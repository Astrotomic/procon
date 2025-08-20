const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { source } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetPlayer(source));
};
