import { useState, useEffect, useCallback } from 'react';
import { getWeatherData, getBackgroundImage } from './services/Meteo.services';
import LargeWidget from '../LargeWidget/LargeWidget';
import SmallWidget from '../SmallWidget/SmallWidget'
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import { Background, MeteoContainer, Container, SmallContainer, SearchBar, SearchButton, Allert, InfoContainer } from './style/Meteo.style';
import { getDtWeather, closeOtherCards, changeVisibility, isWeatherListVisible } from './Meteo.helper';
import { WeatherProps } from './Meteo.d'

const Meteo = () => {
  const [weatherList, setWeatherList] = useState<WeatherProps[]>([]);
  const [filteredWeather, setFilteredWeather] = useState<WeatherProps[]>([]);
  const [filteredValue] = useState<string>('8:00');
  const [cityName, setCityName] = useState<string>('Roma');

  const [newCity, setNewCity] = useState<string>('');
  const [indexFilteredWeather, setIndexFilteredWeather] = useState<number | undefined>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isButtonOver, setIsButtonOver] = useState<boolean>(false);
  const [background, setBackground] = useState<string>('');
  const [visibility, setVisibility] = useState<number>(0);


  // Reucpero dei dati
  // const getWeather = async () => {
  //   try {
  //     const data = await getWeatherData(cityName);
  //     if (data && data.city.name) {
  //       setWeatherList(getDtWeather(data.list, cityName));
  //       setNotFound(false);
  //     } else {
  //       setNotFound(true);
  //     }
  //   } catch (error) {
  //     setNotFound(true);
  //   }
  // };

  const getWeather = useCallback(async () => {
    try {
      const data = await getWeatherData(cityName);
      if (data && data.city.name) {
        setWeatherList(getDtWeather(data.list, cityName));
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setNotFound(true);
    }
  }, [cityName]);
  

  const getBackground = useCallback(async (city: string) => {
    try {
      const response = await getBackgroundImage(city);
      setBackground(response);
    } catch (error) {
      console.log(error);
    }
  }, [setBackground]);

  // Gestione interazioni
  const handleCloseOtherCards = (indexFilteredWeather: number) => {
    const updatedWeatherList = closeOtherCards(indexFilteredWeather, filteredWeather);
    setFilteredWeather(updatedWeatherList);
    setIndexFilteredWeather(indexFilteredWeather);
  };

  const handleChangeVisibility = (index: number) => {
    const newVisibility = changeVisibility(index, visibility);
    setVisibility(newVisibility);
    setIndexFilteredWeather(index);
  };

  const serchCity = () => {
    setCityName(newCity);
  };

  const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      serchCity();
    }
  };

  const changingCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(event.target.value);
  };

  
  const displayBigCard = (
    <MeteoContainer>
      <Container>
        {filteredWeather.map((singleMeteo, indexFilteredWeather) => (
          indexFilteredWeather === visibility && <LargeWidget
          key={singleMeteo.dt}
          weather={singleMeteo}
          onClick={handleCloseOtherCards}
          indexFilteredWeather={indexFilteredWeather}
          open
          />
          ))}
        < SmallContainer>
          {
            filteredWeather.map((singleMeteo, indexFilteredWeather) => (
              indexFilteredWeather !== visibility && <SmallWidget
              key={singleMeteo.dt}
              weather={singleMeteo}
              onClick={handleChangeVisibility}
              indexFilteredWeather={indexFilteredWeather}
              />
              ))
            }
        </SmallContainer>
      </Container>
    </MeteoContainer>
  );
  
  useEffect(() => {
    getWeather();
    getBackground(cityName);
  }, [cityName, getBackground, getWeather]);
  
  useEffect(() => {
    const filteredWeatherList = weatherList.filter(
      (singleMeteo) => singleMeteo.ora === filteredValue
      );
      setFilteredWeather(filteredWeatherList);
    }, [weatherList, filteredValue]);
    
    
    const toggleButtonColor = () => setIsButtonOver((prevState) => !prevState);
    if (weatherList.length === 0) return <div>Sto caricando...</div>;
    
    
    return (
      <Background city={background}>
      <SearchBar
        type="text"
        name="city"
        placeholder='Scrivi il nome di una località...'
        onChange={changingCity}
        onKeyDown={onKeyEnter}
        />
      <SearchButton
        onClick={serchCity}
        onMouseOver={toggleButtonColor}
        onMouseLeave={toggleButtonColor}
        evidenziato={isButtonOver}
      >
        Cerca
      </SearchButton>
      {notFound ? <Allert>Città non trovata</Allert> : displayBigCard}
      <InfoContainer>
        {isWeatherListVisible(indexFilteredWeather) &&
          weatherList.map((meteo) => {
            if (
              meteo.data === filteredWeather[indexFilteredWeather!].data &&
              filteredWeather[indexFilteredWeather!].open === true
            ) {
              return <WeatherInfo key={meteo.dt} weather={meteo} />;
            }
            return <></>;
          })}
      </InfoContainer>
    </Background>
  );
}

export default Meteo;
