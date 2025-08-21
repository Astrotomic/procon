module.exports = (data) => {
    const { identifier, key, value } = data;

    return exports.qbx_core.SetPlayerData(identifier, key, value);
};
