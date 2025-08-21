const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { citizenid } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.DeleteCharacter(citizenid));
};
