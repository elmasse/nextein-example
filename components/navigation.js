import React from 'react'
import Link from 'next/link'

export default ({ style }) => {
  return (
    <nav style={{...styles.nav, ...style}}>
      <a style={styles.item} href="/">Home</a>
      <a style={styles.item} href="/all-posts">All Posts</a>
      <a style={styles.item} href="/sub-section">Sub Section</a>
      <Link href="/tags"><a style={styles.item}>Tags</a></Link>
      {/* <a style={styles.item} href="/tags">Tags</a> */}
      <Link href={{ pathname: '/post', query: { _entry: 'posts/second-post.md' } }} as={'/post/second-post'}><a style={styles.item}>Post</a></Link>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex'
  },
  item: {
    padding: 5
  }
}