import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    console.log(data.list, 'data')

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather"
                                         className="icon-small"/>
                                    <span className="day">{forecastDays[idx]}</span>
                                    <span className="description">{item.weather[0].description}</span>
                                    <span className="min-max">{Math.round(item.main.temp_min)}-{Math.round(item.main.temp_max)}°C</span>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <span>Pressure</span>
                                    <span>{item.main.pressure} hPa</span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span>Humidity</span>
                                    <span>{item.main.humidity}%</span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span>Clouds</span>
                                    <span>{item.clouds.all}%</span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span>Wind speed</span>
                                    <span>{item.wind.speed} m/s</span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span>Sea level</span>
                                    <span>{item.main.sea_level}m</span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span>Feels like</span>
                                    <span>{Math.round(item.main.feels_like)}°C</span>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
};

export default Forecast;