const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { identifier,jobName,grade } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.SetJob(identifier, jobName, grade));
};
