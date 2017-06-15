
import React, { Component } from 'react'

import withEntry, { Content } from 'nextein/entry'


class Post extends Component {

  render () {
    const { entry } = this.props
    const { data, content } = entry
    return (
      <section>
        <h1>{data.title}</h1>
        <Content {...entry}/>
      </section>
    )
  }
}

export default withEntry(Post)
