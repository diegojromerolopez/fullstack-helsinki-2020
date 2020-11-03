import React from 'react'
import { useHistory } from "react-router-dom"
import  { useField } from '../hooks'

const CreateNew = (props) => {
    const history = useHistory()

    const { resetContent, ...content } = useField('text')
    const { resetAuthor, ...author}  = useField('text')
    const { resetInfo, ...info} = useField('text')

    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      history.push("/")
    }

    const reset = () => {
        resetContent()
        resetAuthor()
        resetInfo()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} />
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button>create</button>
        </form>
        <button onClick={reset}>reset</button>
      </div>
    )
  }
export default CreateNew
