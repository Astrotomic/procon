const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,item,count,metadata,slot,ignoreTotal} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.RemoveItem(inv, item, count, metadata, slot, ignoreTotal));
};
