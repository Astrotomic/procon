const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { identifier,moneyType,amount,reason } = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.qbx_core.SetMoney(identifier, moneyType, amount, reason));
};
