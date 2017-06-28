
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
    exportPathMap: () => ({
        'all': { page: '/all-posts' }
    })
})
