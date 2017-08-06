
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
    exportPathMap: () => ({
        '/all-posts': { page: '/all-posts' },
        '/sub-section': { page: '/sub-section' },
        '/tags': { page: '/tags'}
    })
})
