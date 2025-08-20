const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,item,count,metadata,slot,ignoreTotal} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.RemoveItem(inv, item, count, metadata, slot, ignoreTotal));
};
