import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
/* eslint-disable no-undef */
import { useState } from 'react'
import { marked } from "marked";



const initialHtml = `#Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code,<div></div> between 2 backticks.

// 
// // this is multi-line code:

// function anotherExample(firstLine, lastLine) {
//   if (firstLine == '' && lastLine == '') {
//     return multiLineCode;
//   }
// }
// 

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


`

// eslint-disable-next-line no-undef
marked.setOptions({
  breaks:true
})

marked.setOptions({
  breaks:true
})

function App() {
  const [text, setText] = useState(initialHtml)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='app'>
        <h1 id='title'>Markdown</h1>
        <p>Editor</p>
        <textarea id="editor" value={text} onChange={handleChange} placeholder='Enter Markdown....' />
        <p>Previewer</p>
        <div id='preview' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
    </>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
