module.exports = (data) => {
    const { inv, firstItem, firstItemCount, testItem, testItemCount } = data;

    return exports.ox_inventory.CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount);
};
