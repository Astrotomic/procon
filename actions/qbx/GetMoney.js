const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { identifier,moneyType} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.qbx_core.GetMoney(identifier, moneyType));
};
