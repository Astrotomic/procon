const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,item,metadata,count} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.CanCarryItem(inv, item, count, metadata));
};
