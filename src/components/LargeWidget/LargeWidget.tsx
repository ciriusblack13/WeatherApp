import {
  Widget,
  LeftSide,
  RightSide,
  Icon,
  City,
  Temperature,
  Day,
  Status
 } from './styledComponent';

import { 
  FaCloud, 
  FaSun,
  FaSnowflake,
  FaCloudShowersHeavy } from 'react-icons/fa';

  import {BsDropletFill} from 'react-icons/bs'

interface BigCardProps {
  weather: {
    name: string;
    giorno: string;
    ilMeteo: string;
    temp_Media: number;
    main: string;
    open: boolean;
  };

  onClick: (indexFilteredWeather: number) => void;
  indexFilteredWeather: number;
  open: boolean;
}

const BigCard = ({ weather, onClick, indexFilteredWeather, open }: BigCardProps) => {


  const handleCardClick = () => {
    onClick(indexFilteredWeather);
  };

  const weatherLogo = () => {
    let logo
    if (weather.main.toLocaleLowerCase() === 'clouds') logo = <FaCloud style={{color: "grey"}}/>
    if (weather.main.toLocaleLowerCase() === 'clear') logo = <FaSun style={{color: "yellow"}}/>
    if (weather.main.toLocaleLowerCase() === 'snow') logo = <FaSnowflake style={{color: "white"}}/>
    if (weather.main.toLocaleLowerCase() === 'rain') logo = <BsDropletFill style={{color: "#2baac8"}}/>
    if (weather.main.toLocaleLowerCase() === 'drizzle') logo = <FaCloudShowersHeavy style={{color: "dark-grey"}}/>
    if (weather.main.toLocaleLowerCase() === 'thunderstorm') logo = <FaCloudShowersHeavy />
    return logo
  }

  return (
      <Widget
      onClick={handleCardClick}
      >
        <LeftSide>
          <Icon>
            {weatherLogo()}
          </Icon>
          <Status>{weather.ilMeteo.charAt(0).toUpperCase() + weather.ilMeteo.slice(1)}</Status>
        </LeftSide>
        <RightSide>
          <City>{weather.name.charAt(0).toUpperCase() + weather.name.slice(1)}</City>
          <Temperature>{weather.temp_Media}° C</Temperature>
          <Day>{weather.giorno}</Day>
        </RightSide>
      </Widget>
  );
};

export default BigCard;
