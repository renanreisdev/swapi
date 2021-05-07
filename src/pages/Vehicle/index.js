import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { VehicleArea } from './styled';


export default function Vehicle() {
    const api = useApi();

    let { id } = useParams();

    const [vehicleList, setVehicleList] = useState([]);
    const [peopleList, setPeopleList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getVehicle = async () => {
            const vList = await api.getVehicle(id);
            setVehicleList(vList);
        }
        getVehicle();
    }, []);

    useEffect(() => {
        const getPeople = async () => {
            const pList = await api.getAllPeople();
            setPeopleList(pList);
        }
        getPeople();
    }, []);

    useEffect(() => {
        const getFilm = async () => {
            const fList = await api.getFilms();
            setFilmsList(fList);
        }
        getFilm();
    }, []);

    const compare = (compare1, compare2) => {
        if (compare1.url == compare2) {
            return compare1.url;
        }
    }

    return (
        <PageContainer>
            {vehicleList.name &&
                <VehicleArea>
                    <div className="card">
                        <h1>{vehicleList.name}</h1>

                        <div className="detailsVehicle">

                            <div>
                                <h3>Model: <span>{vehicleList.model}</span></h3>
                            </div>

                            <div>
                                <h3>Manufacturer: <span>{vehicleList.manufacturer}</span></h3>
                            </div>

                            <div>
                                <h3>Cost In Credits: <span>{vehicleList.cost_in_credits}</span></h3>
                            </div>

                            <div>
                                <h3>Length: <span>{vehicleList.length}</span></h3>
                            </div>

                            <div>
                                <h3>Max Atmosphering Speed: <span>{vehicleList.max_atmosphering_speed}</span></h3>
                            </div>

                            <div>
                                <h3>Crew: <span>{vehicleList.crew}</span></h3>
                            </div>

                            <div>
                                <h3>Passengers: <span>{vehicleList.passengers}</span></h3>
                            </div>

                            <div>
                                <h3>Cargo Capacity: <span>{vehicleList.cargo_capacity}</span></h3>
                            </div>

                            <div>
                                <h3>Consumables: <span>{vehicleList.consumables}</span></h3>
                            </div>

                            <div>
                                <h3>Vehicle Class: <span>{vehicleList.vehicle_class}</span></h3>
                            </div>

                            <div>
                                <h3>Pilots:
                                    {vehicleList.pilots.length > 0
                                        ? <>
                                            {
                                                peopleList.map((i, k) =>
                                                    vehicleList.pilots.map((j, key) =>
                                                        compare(i, j) &&
                                                        <Link key={k + 1} to={`/people/${i.url.replace('http://swapi.dev/api/people/', '')}`}> <span> {i.name ? vehicleList.pilots.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                    ))
                                            }
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Films:
                                    {vehicleList.films.length > 0
                                        ? <>
                                            {filmsList.map((i, k) =>
                                                vehicleList.films.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/film/${i.url.replace('http://swapi.dev/api/films/', '')}`}> <span> {i.title ? vehicleList.films.length > 1 ? '(' + i.title + ')' : i.title : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                        </div>

                    </div>
                </VehicleArea>
            }
        </PageContainer>
    );
}