const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { identifier,moneyType,amount,reason } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.AddMoney(identifier, moneyType, amount, reason));
};
