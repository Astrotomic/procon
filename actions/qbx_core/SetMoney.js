module.exports = (data) => {
    const { identifier, moneyType, amount, reason } = data;

    return exports.qbx_core.SetMoney(identifier, moneyType, amount, reason);
};
