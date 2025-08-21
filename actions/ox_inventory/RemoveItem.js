module.exports = (data) => {
    const { inv, item, count, metadata, slot, ignoreTotal } = data;

    return exports.ox_inventory.RemoveItem(inv, item, count, metadata, slot, ignoreTotal);
};
