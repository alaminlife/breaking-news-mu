
import './App.css';
import News from './Components/News/News';
import React, {useEffect} from 'react';
import {useState } from 'react';

function App() {
  const[articles, setArticles] = useState ([]);
  useEffect( () => {
    const url ='https://newsapi.org/v2/everything?q=bitcoin&apiKey=cc01ce3501c049ea8ffcdb5a2d908bf0';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])

  return (
    <div className="App">
      <h5>Headline: {articles.length}</h5>
     {
      articles.map(article => <News article={article}></News>)
     }
    </div>
  );
}

export default App;
