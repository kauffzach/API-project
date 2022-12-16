const express = require('express');
const router = express.Router();
const apiRouter = require('./api')


router.use('/api', apiRouter)

// Add an XSRF-TOKEN cookie
router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.status(200).json({
        'CSRF-Token': csrfToken
    });
});

module.exports = router;
