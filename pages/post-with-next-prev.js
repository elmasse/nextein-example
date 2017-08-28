
import React, { Component } from 'react'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import withPost, { Content } from 'nextein/post'
import Link from 'nextein/link'

import Navigation from '../components/navigation'

class Post extends Component {

  render() {
    const { post, posts } = this.props
    const { data, content } = post
    const tags = [].concat(data.tag)

    const currIdx = posts.findIndex(p => (p.data.title == post.data.title))
    const prev = posts[currIdx - 1]
    const next = posts[currIdx + 1]

    return (
      <main style={styles.main}>
        <Navigation style={styles.navigation} />
        <article style={styles.section}>
          <h1>{data.title}</h1>

          {tags.length &&
            <div>
              {
                tags.map(tag => <span style={styles.tag} key={`tag-${tag}`}> &gt; {tag}</span>)
              }
            </div>

          }
          <Content {...post} />
        </article>
        <footer>
          <div>
            {
              prev &&
              <Link {...prev}><a> <strong>&lt;</strong> Prev: {prev.data.title}</a></Link>
            }
          </div>
          <div>
            {
              next &&
              <Link {...next}><a >Next: {next.data.title} <strong>&gt;</strong> </a></Link>
            }
          </div>

        </footer>
      </main>
    )
  }
}

export default withPostsFilterBy(inCategory('post'))(withPost(Post))

const styles = {
  main: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontWeight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '60vw'
  },
  paragraph: {
    background: '#f5f5f5',
    padding: 20
  },
  navigation: {
    alignSelf: 'center',
    width: '60vw'
  },
  tag: {
    display: 'inline',
    background: '#ccc',
    fontSize: '.75em',
    margin: 3,
    padding: 5
  }
}

