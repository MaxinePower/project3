import { useState } from "react";

const CatPreferenceForm = (props) => {
    // create a user select for picking the number of cats they want to see
    // grab that selected value with an event listener on form submit and then update state for numOfCats
    const [usersQuantityOfKitty, setUsersQuantityOfKitty] = useState("12");
    const handleChange = e => {
        setUsersQuantityOfKitty(e.target.value);
    }
    const handleUserSubmit = e => {
        props.handleSubmit(e, usersQuantityOfKitty)
    };

    return(
        <form action="" onSubmit={handleUserSubmit}>
            <h2>How shall we serve you these wonderous kitty pictures?</h2>
            
            <fieldset onChange={handleChange}>
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
            </fieldset>
            <button type="submit">Unleash the kitties!</button>
        </form>
    )
}
export default CatPreferenceForm;