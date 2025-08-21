module.exports = (data) => {
    const { inv, item, count, metadata, slot, cb } = data;

    return exports.ox_inventory.AddItem(inv, item, count, metadata, slot, cb);
};
