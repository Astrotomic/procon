module.exports = (data) => {
    const { inv, owner } = data;

    return exports.ox_inventory.GetInventory(inv, owner);
};
