import React, {useState, useEffect} from 'react';
import './App.css';
import BookList from './bookList/BookList';

function App() {
  let data = [];
  let [list, loadList] = useState(data);
  
  useEffect(()=> {
    // Load data form server
    data = JSON.parse("[\n    {\n        \"id\": 1,\n        \"title\": \"Money madness\",\n        \"rank\": 4.8,\n        \"description\": \"This beginning guide to economics will have readers thinking about the purpose, and not just the value, of money. From bartering, early forms of currency, credit cards, and digital payment, here is a clear and thorough introduction to money.\",\n        \"tags\": [\"Money\", \"History\", \"Juvanile literature\"],\n        \"author\": [\"David A Adler\", \"Edward Miller\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 2,\n        \"title\": \"Fun with Roman numerals\",\n        \"rank\": 3.3,\n        \"description\": \"Introduces the seven symbols and their values, shows how to add and subtract to make numbers. Teaches how the symbols interact and about the bar across the top and the open box that are used for larger numbers. Shows Roman numerals in real life settings: on clocks, in books, and on buildings.\",\n        \"tags\": [\"Roman numerals\", \"Counting\", \"Juvanile literature\"],\n        \"author\": [\"David A Adler\", \"Edward Miller\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 3,\n        \"title\": \"I'm OK, you're OK : a practical guide to transactional analysis\",\n        \"rank\": 5,\n        \"description\": \"A self-help book that uses the principles of Transactional Analysis to guide a person toward an understanding of his behavior and to help him in attaining more rational behavior.\",\n        \"tags\": [\"Transcriptional analysis\", \"Mental health\", \"Psychiatry\"],\n        \"author\": [\"Thomas A Harriss\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 4,\n        \"title\": \"A brief illustrated guide to understanding Islam\",\n        \"rank\": 4.9,\n        \"description\": \"This Islamic guide is for non-Muslims who would like to understand Islam, Muslims (Moslems), and the Holy Quran (Koran). It is rich in information, references, bibliography, and illustrations. It has been reviewed and edited by many professors and well-educated people. It is brief and simple to read, yet contains much scientific knowledge. - Publisher.\",\n        \"tags\": [\"Islam\", \"Doctrines\"],\n        \"author\": [\"I A Ibrahim\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 5,\n        \"title\": \"The world of Christopher Robin : the complete When we were very young and Now we are six\",\n        \"rank\": 4,\n        \"description\": \"Verses for children.\",\n        \"tags\": [\"English\", \"Children poetry\", \"Nonsense verses\"],\n        \"author\": [\"A A Milne\", \"Ernest H Shepard\", \"E P Dutton (Firm)\"],\n        \"count\": 0\n    },\n    {\n        \"id\": 6,\n        \"title\": \"Bones and the birthday mystery\",\n        \"rank\": 3.4,\n        \"description\": \"In his latest case, young Jeffrey Bones tries to discover the whereabouts of his grandfather's missing birthday present.\",\n        \"tags\": [\"Gifts\", \"Birthdays\", \"Juvenile fiction\"],\n        \"author\": [\"David A Adler\", \"Barbard Johensen Newman\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 7,\n        \"title\": \"Kate remembered\",\n        \"rank\": 4,\n        \"description\": \"Recounts the remarkable life of leading lady Katharine Hepburn, presenting a portrait of the four-time Academy Award winner through her intimate conversations and private reflections on love, family, friendship, and show business.\",\n        \"tags\": [\"Biography\"],\n        \"author\": [\"A Scott Berg\"],\n        \"count\": 1\n    },\n    {\n        \"id\": 8,\n        \"title\": \"Satchel Paige : don't look back\",\n        \"rank\": 4.1,\n        \"description\": \"Satchel Paige was one of the greatest pitchers in baseball. Take a look at his life and his struggle to be accepted into the major league.\",\n        \"tags\": [\"History\", \"Biography\", \"Juvenile literature\"],\n        \"author\": [\"David A Adler\", \"Terry Widener\"],\n        \"count\": 0\n    }\n]")
    loadList(data);
  }, []);


  function Search() {
    
  }

  return (
    <div className="App">
      <input id="Search" onChange={(e)=> Search(e.target.value)}/>
      <BookList books = {list}/>
    </div>
  );
}

export default App;
