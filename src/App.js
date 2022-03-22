import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CatPreferenceForm from './CatPreferenceForm';
import CatGallery from './Gallery';

function App() {
  // keep track of the api results for all the cats pictures
  const [catData, setCatData] = useState([]);
  // track how many kitties the user wants to see
  const [numOfCats, setNumOfCats] = useState(0);
  // what theme of cat pic do the user want to see
  const [category, setCategory] = useState();

  // i do not currently know how to do api call 'header's to pass the key so ill be going unsecure with passing it as a param. for now
  // once form is filled out do this
  useEffect(() => {
    if (numOfCats > 0 && category !== 'placeholder') {
      axios({
        url: 'https://api.thecatapi.com/v1/images/search',
        params: {
          api_key: '5205493a-48e2-4f7a-919f-07519cdaabad',
          limit: numOfCats,
          size: 'med',
          category_ids: category
        }
      }).then((apiRes) => {
        if (apiRes.status === 200 && apiRes.data.length !== 0) {
          setCatData(apiRes.data);
        } else {
          throw new Error('frickity-fuck! the call failed or you were so specific they didnt have data to fit your criteria');
        };
      }).catch(function(err) {
        console.log(err, "oh no! the kitty database seems to be unavailable rn pls try again later:(");
        // display a pop up message of sorts
      });
    } else {
      console.log('please pick something for all of the cat preferences!');
      // change to a span with a toggled display class, im not sure how to make that accessible to more than just sighted users though, and how to stop it from firing on initial declaration of numOfCats and category. look more into this 
    }
  }, [numOfCats, category])
  // create a function we can use as a call back to update numOfCats and category from the form
  const preferedCats = (e, chosenNum, chosenTheme) => {
    e.preventDefault();
    setNumOfCats(chosenNum);
    setCategory(chosenTheme)
  }
  // return an img of the cat ! so it can render on the page
  return (
    <>
      <div className='wrapper'>
        <header>
          <h1>KitCats for the win:D</h1>
        </header>
        <main>
          {/* the form component */}
          <CatPreferenceForm handleSubmit={preferedCats} setCategory={setCategory} />
          {/* then the gallery component */}
          <CatGallery arrayOfKitties={catData} />
        </main>
      </div>
      <footer>
        <p>Made at <a href="https://junocollege.com">Juno College of Technology</a> using <a href="https://thecatapi.com/">The Cat API</a>.</p>
      </footer>
    </>
  );
}

export default App;
