const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { identifier,moneyType} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.GetMoney(identifier, moneyType));
};
