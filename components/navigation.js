import React from 'react'

export default ({ style }) => {
  return (
    <nav style={{...styles.nav, ...style}}>
      <a style={styles.item} href="/">Home</a>
      <a style={styles.item} href="/all-posts">All Posts</a>
      <a style={styles.item} href="/sub-section">Sub Section</a>
      <a style={styles.item} href="/tags">Tags</a>
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