const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { identifier,moneyType,amount,reason } = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.RemoveMoney(identifier, moneyType, amount, reason));
};
