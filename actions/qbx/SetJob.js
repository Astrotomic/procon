const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { identifier,jobName,grade } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.SetJob(identifier, jobName, grade));
};
