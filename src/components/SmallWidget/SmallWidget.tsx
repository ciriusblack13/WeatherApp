import { 
    MiniCard, 
    Icon,
    Temperature,
    Day
 } from './styledComponent'
import { FaCloud, 
    FaSun,
    FaSnowflake,
    FaCloudShowersHeavy } from 'react-icons/fa';
import {BsDropletFill} from 'react-icons/bs'

interface SmallCardProps {
    weather: {
        giorno: string;
        ilMeteo: string;
        temp_Media: number;
        main: string;

    };

    onClick: (indexFilteredWeather: number) => void;
    indexFilteredWeather: number;

}

const BigCard = ({ weather, onClick, indexFilteredWeather, }: SmallCardProps) => {

    const weatherLogo = () => {
        let logo
        if (weather.main.toLocaleLowerCase() === 'clouds') logo = <FaCloud style={{color: "grey"}}/>
        if (weather.main.toLocaleLowerCase() === 'clear') logo = <FaSun style={{color: "yellow"}}/>
        if (weather.main.toLocaleLowerCase() === 'snow') logo = <FaSnowflake style={{color: "white"}}/>
        if (weather.main.toLocaleLowerCase() === 'rain') logo = <BsDropletFill style={{color: "#2baac8"}}/>
        if (weather.main.toLocaleLowerCase() === 'drizzle') logo = <FaCloudShowersHeavy style={{color: "dark-grey"}}/>
        if (weather.main.toLocaleLowerCase() === 'thunderstorm') logo = <FaCloudShowersHeavy style={{color: "black"}}/>
        return logo
      }

    const handleCardClick = () => {
        onClick(indexFilteredWeather);
    };

    return (
        <MiniCard
            onClick={handleCardClick}
        >
                <Icon>
                    {weatherLogo()}
                </Icon>
                    <Temperature>{weather.temp_Media}° C</Temperature>
                    <Day>{weather.giorno}</Day>
        </MiniCard>
    );
};

export default BigCard;
