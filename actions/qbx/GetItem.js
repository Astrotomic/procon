const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,item,metadata,returnsCount} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.GetItem(inv, item, metadata, returnsCount));
};
