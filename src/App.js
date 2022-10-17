import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked';
import data from './data';

function App() {

  const [note, setNote] = useState(data)

  const handleChange = (event) => {
    setNote(event.target.value)
  }

  const markdown = marked(note, {breaks: true})

  return (
    <div className="App">
      <h1 className="text-center mt-5 title">My Markdown Previewer</h1> 
      <div className="row page">
        <div className="col-5" id="editorboard">
          <h4 className="mt-5 text-center subtitle">Enter your markdown:</h4>
          <textarea className="form-control rounded p-3" id="editor" value={note} onChange={handleChange} />
        </div>
        <div className="col-5" id="preview">
          <h4 className="mt-5 text-center subtitle">Check the result:</h4>
          <div className="preview rounded p-3" dangerouslySetInnerHTML={{__html: markdown}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
