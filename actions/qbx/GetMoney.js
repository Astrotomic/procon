const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { identifier,moneyType} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetMoney(identifier, moneyType));
};
