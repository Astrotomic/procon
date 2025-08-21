module.exports = (data) => {
    const { source } = data;

    return exports.qbx_core.GetPlayer(source);
};
