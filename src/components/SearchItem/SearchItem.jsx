import './SearchItem.css'
import List from '../../assets/list.jpg'
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {

    const navigate = useNavigate();
    let handleNavigate = () => {
        navigate("/hotels/:id")
    }

    const apiUrl = "https://serpapi.com/search.json?engine=google_hotels&q=Bali+Resorts&check_in_date=2024-10-03&check_out_date=2024-10-04&adults=2&currency=USD&gl=us&hl=en"
    const apiKey = "secret_api_key"

    async function searchHotel(hotel) {

        let data = await response.json();

        const response = await fetch(apiUrl + hotel + `&appid=${apiKey}`);

        document.querySelector(".siTitle").innerHTML = data.properties.name;

    }

    //     const { getJson } = require("serpapi");

    //   getJson({
    //     engine: "google_hotels",
    //     q: "Bali Resorts",
    //     check_in_date: "2024-10-03",
    //     check_out_date: "2024-10-04",
    //     adults: "2",
    //     currency: "USD",
    //     gl: "us",
    //     hl: "en",
    //     apiKey: "secret_api_key"
    //   }, (json) => {
    //     console.log(json);
    //   });

    return (
        <div className="SearchItem">

            <img src={List} className="siImg" />

            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>

            <div className="siDetails">

                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={handleNavigate}>See availability</button>
                </div>

            </div>

        </div>
    )
}

export default SearchItem;