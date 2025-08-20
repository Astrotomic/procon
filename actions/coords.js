const { validateOrThrow } = require('../utils/validate');

const rules = { source: 'required|integer|min:1' };

module.exports = (data) => {
    validateOrThrow(data, rules);

    const { source } = data;

    const ped = GetPlayerPed(source);
    const [x, y, z] = GetEntityCoords(ped);
    const h = GetEntityHeading(ped);

    return { x, y, z, h };
};

module.exports.rules = rules;
