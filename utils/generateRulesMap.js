function generateRulesMap(obj) {
    const result = {};

    for (const key in obj) {
        const val = obj[key];
        if (!val) continue;

        if (typeof val === 'function') {
            if (val.rules) {
                result[key] = val.rules;
            } else {
                result[key] = null;
            }
        } else if (typeof val === 'object') {
            const child = generateRulesMap(val);

            if (Object.keys(child).length > 0) {
                for (const ck in child) {
                    result[key + '.' + ck] = child[ck];
                }
            }
        }
    }

    return result;
}

module.exports = generateRulesMap;
