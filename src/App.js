import './App.css';
// import axios for the api call and used hooks
import {useState, useEffect} from 'react';
import axios from 'axios';
// import used components
import CatPreferenceForm from './CatPreferenceForm';
import CatGallery from './Gallery';

function App() {
  // create a useState for catData to keep track of the api results for all the cats pictures
  const [catData, setCatData] = useState([]);
  // create another usestate called numOfCats to track how many kitties the user wants to see
  const [numOfCats, setNumOfCats] = useState(0);

  // once user has selected a number of KitCats run a side effect to use numOfCats in an api call
  // i do not currently know how to do api call 'header's to pass the key so ill be going unsecure with passing it as a param. for now
  useEffect(() => {
    axios({
      url: 'https://api.thecatapi.com/v1/images/search',
      params: {
        api_key: '5205493a-48e2-4f7a-919f-07519cdaabad',
        limit: numOfCats,
        size: 'med'
      }
    }).then((apiRes) => {
      console.log(apiRes.data);
      // take the data from that api call and update catData or display error of some sort
      setCatData(apiRes.data);
    })
    // empty dependency rn but change to numOfCats later
  }, [numOfCats])
    
    // if its not an error pass catData as a prop to Gallery
  // create a function we can use as a call back to update numOfCats from the form
  const chosenNumOfCats = (e, chosenValue) => {
    e.preventDefault();
    console.log('roses');
    setNumOfCats(chosenValue);
  }

  // Gallery.js stuff

  // use map to map over that cat array!
    // return KitCatImg component that youve passed the url from the cat data to as a prop

  // KitCatImg.js stuff
  
  


  // return an img of the cat ! so it can render on the page
  return (
    <div className='wrapper'>
      {/* a wonderful header for KitCats */}
      <header>
        <h1>KitCats for the win:D</h1>
      </header>
      {/* the form component */}
      <CatPreferenceForm handleSubmit={chosenNumOfCats} />
      {/* then the gallery component */}
      <CatGallery arrayOfKitties={catData} />
      {/* and last but not least on the page is the footer! */}
    </div>
  );
}

export default App;
