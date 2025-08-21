module.exports = (data) => {
    const { identifier, moneyType, amount, reason } = data;

    return exports.qbx_core.RemoveMoney(identifier, moneyType, amount, reason);
};
