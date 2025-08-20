const fetchqbxplayer = require('../../utils/fetchqbxplayer');

module.exports = (data) => {
    const { inv,firstItem,firstItemCount,testItem,testItemCount} = data;

    return fetchqbxplayer(source).then((qbxplayer) => exports.ox_inventory.CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount));
};
