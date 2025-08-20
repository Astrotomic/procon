const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,owner} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.GetInventory(inv, owner));
};
