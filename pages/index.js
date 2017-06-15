
import withEntries, { Entries } from 'nextein/entries'
import React from 'react'

const Index = ({ entries }) => {
  return (
  <section>
    <h1>Hello</h1>
    <Entries entries={entries} category='post'/>

    <Entries entries={entries} category='node'/>
    
  </section>
)
}
export default withEntries()(Index)
