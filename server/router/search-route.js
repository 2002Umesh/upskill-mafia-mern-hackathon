const express = require("express")
const router = express.Router()
const searchController = require("../controller/search-controller")

router.route('/search').get(searchController.searchMentorsByCourses)
router.route('/searches').get(searchController.searchBar)



module.exports = router;