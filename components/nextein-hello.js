
import React from 'react'

export default ({ title }) => (
  <section style={styles.section}>
    <h1><span style={{ fontWeight: 200 }} >Hello, there. I'm </span>Nextein</h1>
    {!title &&
       <p> A Blog / Static site generator based in <strong>Next.js</strong></p>
    }
    {
      title &&
      <h2>{title}</h2>
    }

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
