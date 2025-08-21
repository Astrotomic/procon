module.exports = (data) => {
    const { citizenid } = data;

    return exports.qbx_core.GetOfflinePlayer(citizenid);
};
