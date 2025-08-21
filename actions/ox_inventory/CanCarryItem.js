module.exports = (data) => {
    const { inv, item, metadata, count } = data;

    return exports.ox_inventory.CanCarryItem(inv, item, count, metadata);
};
