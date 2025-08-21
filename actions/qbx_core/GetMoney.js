module.exports = (data) => {
    const { identifier, moneyType } = data;

    return exports.qbx_core.GetMoney(identifier, moneyType);
};
