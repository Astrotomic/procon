const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,item,count,metadata,slot,cb} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.AddItem(inv, item, count, metadata, slot, cb));
};
