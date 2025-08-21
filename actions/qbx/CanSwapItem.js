const fetchQbxPlayer = require('../../utils/fetchQbxPlayer');

module.exports = (data) => {
    const { inv,firstItem,firstItemCount,testItem,testItemCount} = data;

    return fetchQbxPlayer(source).then((qbxplayer) => exports.ox_inventory.CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount));
};
