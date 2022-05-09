const router = require('express').Router();
const apiRoutes = require('./api');

// establishing that all the routes in apiRoutes are chained to the end of /api
router.use('/api', apiRoutes);

// if a endpoint is entered that does not match any of the ones defined, it will return the following message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;