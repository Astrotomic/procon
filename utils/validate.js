const Validator = require('validatorjs');

class ValidationError extends Error {
    constructor(errors, message = 'The given data was invalid.') {
        super(message);
        this.name = 'ValidationError';
        this.errors = errors || {};
        this.status = 422;
    }
}

/**
 * Validate data using validatorjs and throw on failure with a Laravel-like error.
 * @param {object} data
 * @param {object} rules
 * @param {object} [customMessages]
 * @param {object} [customAttributes]
 */
function validateOrThrow(data, rules, customMessages, customAttributes) {
    const validation = new Validator(data, rules, customMessages);
    if (customAttributes && typeof validation.setAttributeNames === 'function') {
        validation.setAttributeNames(customAttributes);
    }

    if (validation.fails()) {
        const errors = validation.errors.all();
        throw new ValidationError(errors);
    }

    return true;
}

module.exports = {
    validateOrThrow,
    ValidationError,
};
