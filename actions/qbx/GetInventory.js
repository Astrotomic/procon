const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,owner} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.GetInventory(inv, owner));
};
