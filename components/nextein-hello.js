
import React from 'react'

export default () => (
  <section style={styles.section}>
    <h1><span style={{ fontWeight: 200 }} >Hello, there. I'm </span>Nextein</h1>
    <p> A Blog generator based in <strong>Next.js</strong></p>
  </section>
)

const styles = {
  section: {
    height: '100vh',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4'
  }
}
