module.exports = (data) => {
    const { identifier } = data;

    return exports.qbx_core.GetUserId(identifier);
};
