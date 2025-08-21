const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { source } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.GetPlayer(source));
};
