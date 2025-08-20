const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,item,metadata,returnsCount} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.GetItem(inv, item, metadata, returnsCount));
};
