import React from 'react'

const Anecdote = ({ anecdote, vote }) => (
    <div>
        <p>{anecdote.content}</p>
        <em>{anecdote.author}</em>
        <p><a href={anecdote.info}>More info url</a></p>
        <p><span>{anecdote.votes}</span> vote(s)</p>
        <button onClick={() => vote(anecdote.id)}>Vote</button>
    </div>
)
export default Anecdote