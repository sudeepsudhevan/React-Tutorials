import CityItem from "./CityItem"
import style from "./CityList.module.css"
import Message from "./Message"
import Spinner from "./Spinner"


export default function CityList({cities, isloading}) {

    if (isloading) return <Spinner />

    if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />

  return (
    <ul className={style.cityList}>
        {cities.map((city) => (
            <CityItem city={city} key={city.id} />
        ))}
    </ul>
  )
}




