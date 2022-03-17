import axios from "axios";
import { useEffect, useState } from "react";

const CatPreferenceForm = (props) => {
    // create a user select for picking the number of cats/theme they want to see
    // grab that selected values with an event listener on form submit and then update their states
    const [usersQuantityOfKitty, setUsersQuantityOfKitty] = useState(0);
    const [categoryDropDown, setCategoryDropDown] = useState([]);
    const [userCategory, setUserCategory] = useState(0);
    const handleNumChange = e => {
        setUsersQuantityOfKitty(e.target.value);
    }
    const handleThemeChange = e => {
        setUserCategory(e.target.value);
    }
    const handleUserSubmit = e => {
        props.handleSubmit(e, usersQuantityOfKitty, userCategory);
    };
    // make api call to populate a drop down for categories
    useEffect(() => {
        axios({
            url: 'https://api.thecatapi.com/v1/categories',
            params: {
                api_key: '5205493a-48e2-4f7a-919f-07519cdaabad'
            }
        }).then((apiRes) => {
            // take the data from that api call and update category dropdown or throw an error of some sort
            if (apiRes.status === 200 && apiRes.data.length !== 0) {
                setCategoryDropDown(apiRes.data);
            } else {
                throw new Error('holy shit! the call failed! how are we supose to ask for space cats now!');
            };
        }).catch(function(err) {
            console.log(err, "oh no! the kitty database seems to not want to let you see specific themes rn:(");
            // display a pop up message of sorts
        });
    }, [])
    
    return(
        <form action="" onSubmit={handleUserSubmit}>
            <h2>How shall we serve you these wonderous kitty pictures?</h2>
            
            <fieldset onChange={handleNumChange}>
                <legend>How many cats do you desire to see?</legend>

                <input type="radio" id="twoCats" name="numOfCats" value="2" />
                <label htmlFor="twoCats">2</label>
                <input type="radio" id="fiveCats" name="numOfCats" value="5" />
                <label htmlFor="fiveCats">5</label>
                <input type="radio" id="tenCats" name="numOfCats" value="10" />
                <label htmlFor="tenCats">10</label>
                <input type="radio" id="fifteenCats" name="numOfCats" value="15" />
                <label htmlFor="fifteenCats">15</label>
                <input type="radio" id="twentyCats" name="numOfCats" value="20" />
                <label htmlFor="twentyCats">20</label>
                <input type="radio" id="fiftyCats" name="numOfCats" value="50" />
                <label htmlFor="fiftyCats">50</label>
            </fieldset>

            <label htmlFor="categoryDropDown" className="dropDownLabel">Image Theme:</label>
            <select name="categoryDropDown" id="categoryDropDown" onChange={handleThemeChange}>
                <option value="placeholder" defaultValue >Pick A Theme!</option>
                {
                    categoryDropDown.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })
                }
            </select>
            <button type="submit">Unleash the kitties!</button>
        </form>
    )
}
export default CatPreferenceForm;