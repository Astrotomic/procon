const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,item,count,metadata,slot,cb} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.AddItem(inv, item, count, metadata, slot, cb));
};
