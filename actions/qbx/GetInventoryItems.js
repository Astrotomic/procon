const fetchqbxplayer = require('../../utils/fetchQpxPlayer');

module.exports = (data) => {
    const { inv,owner} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.GetInventoryItems(inv, owner));
};
