
const nexteinConfig = require('nextein/config').default

const stories = ['food', 'cars'].reduce( (prev, entry) => ({
    ...prev,
    [`/${entry}`]: { page: '/stories', query: { category: `stories/${entry}` } }
}), {})

module.exports = nexteinConfig({
    exportPathMap: () => ({
        '/all-posts': { page: '/all-posts' },
        '/sub-section': { page: '/sub-section' },
        '/tags': { page: '/tags'},
        ...stories
    })
})
