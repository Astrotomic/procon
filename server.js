const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('./middlewares/authenticate.js');
const config = require('./config.json');
const actions = require('./utils/actions');
const generateDotNotatedKeys = require('./utils/generateDotNotatedKeys');
const generateRulesMap = require('./utils/generateRulesMap');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(authenticate);

app.get('/list', (req, res) => {
    try {
        const rules = generateRulesMap(actions);
        res.json(rules);
    } catch (error) {
        res.status(500).json({ error: error?.toString() || 'Internal Server Error' });
    }
});

app.post('/run/:action', (req, res) => {
    const actionName = req.params.action;

    if (actionName) {
        const action = actionName.split('.').reduce((obj, key) => obj[key], actions);

        if (action) {
            new Promise((resolve, reject) => {
                resolve(action(req.body));
            })
                .then((result) => {
                    result = result ?? true;
                    console.log(actionName + '(' + JSON.stringify(req.body) + ')' + ': ' + JSON.stringify(result ?? null));
                    res.json({ result });
                })
                .catch((error) => {
                    if (error && (error.name === 'ValidationError' || error.status === 422)) {
                        return res.status(422).json({
                            message: 'The given data was invalid.',
                            errors: error.errors || {},
                        });
                    }
                    return res.status(500).json({ error: error?.toString() || 'Internal Server Error' });
                });
            return;
        }
    }

    res.status(404).json({ error: 'Invalid action' });
});

app.listen(port, () => {
    console.log(generateDotNotatedKeys(actions));
    console.log(`proCON is listening on port ${port}`);
});
