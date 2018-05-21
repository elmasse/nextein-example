import React from 'react'
import Link from 'nextein/link'

const Navigation = ({ style }) => {
  return (
    <nav style={{...styles.nav, ...style}}>
      <Link href="/"><a style={styles.item}>Home</a></Link>
      <Link href="/all-posts"><a style={styles.item}>All Posts</a></Link>
      <Link href="/sub-section"><a style={styles.item}>Sub Section</a></Link>
      {/* <a style={styles.item} href="/">Home</a>
      <a style={styles.item} href="/all-posts">All Posts</a>
      <a style={styles.item} href="/sub-section">Sub Section</a> */}
      <Link href="/tags"><a style={styles.item}>Tags</a></Link>
      <Link href="/cars"><a style={styles.item}>Cars</a></Link>
      {/* <a style={styles.item} href="/tags">Tags</a> */}
    </nav>
  )
}

export default Navigation

const styles = {
  nav: {
    display: 'flex'
  },
  item: {
    padding: 5
  }
}