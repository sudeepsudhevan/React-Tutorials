import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem"
import style from "./CountryList.module.css"
import Message from "./Message"
import Spinner from "./Spinner"


export default function CountryList() {

    const { cities, isloading } = useCities();

    if (isloading) return <Spinner />

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, {country: city.country, emoji: city.emoji}]
        } else return arr
    }, []);

    console.log(countries);
    

  return (
    <ul className={style.countryList}>
        {countries.map((country) => (
            <CountryItem country={country} key={country.country} />
        ))}
    </ul>
  )
}




