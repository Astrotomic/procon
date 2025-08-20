const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,item,metadata,count} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.CanCarryItem(inv, item, count, metadata));
};
