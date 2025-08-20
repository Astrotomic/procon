module.exports = (source) => {
    return new Promise((resolve) => {
        TriggerEvent('procon:server:qbxPlayer', source, function (qbxPlayer) {
            resolve(qbxPlayer);
        });
    });
};
