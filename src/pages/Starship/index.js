import { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { StarshipArea } from './styled';
import { Link, useParams } from 'react-router-dom';


export default function Starship() {
    const api = useApi();

    let { id } = useParams();

    const [starshipList, setStarshipList] = useState([]);
    const [peopleList, setPeopleList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getStarship = async () => {
            const sList = await api.getStarship(id);
            setStarshipList(sList);
        }
        getStarship();
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
            {starshipList.name &&
                <StarshipArea>
                    <div className="card">
                        <h1>{starshipList.name}</h1>

                        <div className="detailsStarship">

                            <div>
                                <h3>Model: <span>{starshipList.model}</span></h3>
                            </div>

                            <div>
                                <h3>Manufacturer: <span>{starshipList.manufacturer}</span></h3>
                            </div>

                            <div>
                                <h3>Cost In Credits: <span>{starshipList.cost_in_credits}</span></h3>
                            </div>

                            <div>
                                <h3>Length: <span>{starshipList.length}</span></h3>
                            </div>

                            <div>
                                <h3>Max Atmosphering Speed: <span>{starshipList.max_atmosphering_speed}</span></h3>
                            </div>

                            <div>
                                <h3>Crew: <span>{starshipList.crew}</span></h3>
                            </div>

                            <div>
                                <h3>Passengers: <span>{starshipList.passengers}</span></h3>
                            </div>

                            <div>
                                <h3>Cargo Capacity: <span>{starshipList.cargo_capacity}</span></h3>
                            </div>

                            <div>
                                <h3>Consumables: <span>{starshipList.consumables}</span></h3>
                            </div>

                            <div>
                                <h3>Hyperdrive Rating: <span>{starshipList.hyperdrive_rating}</span></h3>
                            </div>

                            <div>
                                <h3>MGLT: <span>{starshipList.MGLT}</span></h3>
                            </div>

                            <div>
                                <h3>Starship Class: <span>{starshipList.starship_class}</span></h3>
                            </div>

                            <div>
                                <h3>Pilots:
                                    {starshipList.pilots.length > 0
                                        ? <>
                                            {
                                                peopleList.map((i, k) =>
                                                    starshipList.pilots.map((j, key) =>
                                                        compare(i, j) &&
                                                        <Link key={k + 1} to={`/people/${i.url.replace('http://swapi.dev/api/people/', '')}`}> <span> {i.name ? starshipList.pilots.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                    ))
                                            }
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Films:
                                    {starshipList.films.length > 0
                                        ? <>
                                            {filmsList.map((i, k) =>
                                                starshipList.films.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/film/${i.url.replace('http://swapi.dev/api/films/', '')}`}> <span> {i.title ? starshipList.films.length > 1 ? '(' + i.title + ')' : i.title : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                        </div>

                    </div>
                </StarshipArea>
            }
        </PageContainer>
    );
}