const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { identifier } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetUserId(identifier));
};
