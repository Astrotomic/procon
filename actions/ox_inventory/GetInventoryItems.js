module.exports = (data) => {
    const { inv, owner } = data;

    return exports.ox_inventory.GetInventoryItems(inv, owner);
};
