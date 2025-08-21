module.exports = (data) => {
    const { identifier, jobName, grade } = data;

    return exports.qbx_core.SetJob(identifier, jobName, grade);
};
