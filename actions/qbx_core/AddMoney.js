module.exports = (data) => {
    const { identifier, moneyType, amount, reason } = data;

    return exports.qbx_core.AddMoney(identifier, moneyType, amount, reason);
};
