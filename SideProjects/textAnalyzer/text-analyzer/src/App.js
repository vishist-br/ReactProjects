import React from 'react';
import './App.css';
import NavbarView from './components/navbarView';
import Form from 'react-bootstrap/Form'


function App() {
  const [userInput, setUserInput] = React.useState('');
  const handleChange =(e) =>{
    setUserInput(e.target.value);
  }

  function countPronouns(sentence) {
    const pronouns = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves'];
    
    const words = sentence.split(/\s+/);
    
    let pronounCount = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (pronouns.includes(word)) {
        pronounCount++;
      }
    }
    
    return pronounCount;
  }
  
  return (
    <div className="App-header">
      <NavbarView />
      <div className='main-layout'>
       <div className='flex-container'>
         <div className='counter-container'>
           <h3 className='counter-header'>Words</h3>
           <h2 className='counter-footer'>{String(userInput).split(/\s+/).length}</h2>
         </div>
         <div className='counter-container'>
         <h3 className='counter-header'>Characters</h3>
           <h2 className='counter-footer'>{String(userInput).trim().length}</h2>
         </div>
         <div className='counter-container'>
         <h3 className='counter-header'>Sentences</h3>
           <h2 className='counter-footer'>{String(userInput).split(/[.!?]+/).filter(Boolean).length}</h2>
         </div>
         <div className='counter-container'>
         <h3 className='counter-header'>Paragraphs</h3>
           <h2 className='counter-footer'>{String(userInput).split('\n\n').filter(Boolean).length}</h2>
         </div>
         <div className='counter-container'>
         <h3 className='counter-header'>Pronouns</h3>
           <h2 className='counter-footer'>{countPronouns(userInput)}</h2>
         </div>
       </div>
       <div className='word-layout'>
       <Form.Control as="textarea" aria-label="With textarea" value={userInput} onChange={handleChange} placeholder='Place your text here...' />
</div>
<div className='final-layout'>
<div className='flex-container'>
<div className='counter-container'>
           <h3 className='counter-header'>Average Reading Time</h3>
           <h2 className='counter-footer'>{(String(userInput).trim().length)/225 == 0 ? '-' :  '~' + Math.round((String(userInput).trim().length/225)) + ' ' +  'minute' }</h2>
         </div>
         <div className='counter-container'>
           <h3 className='counter-header'>Longest Word</h3>
           <h2 className='counter-footer'>{String(userInput).split(/\s+/).reduce((a,b) => {
             return a.length > b.length ? a : b;
           }) || '-'}</h2>
         </div>
  </div>
</div>
      </div>
    
    </div>
  );
}

export default App;
