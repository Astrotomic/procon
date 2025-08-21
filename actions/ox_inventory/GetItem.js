module.exports = (data) => {
    const { inv, item, metadata, returnsCount } = data;

    return exports.ox_inventory.GetItem(inv, item, metadata, returnsCount);
};
