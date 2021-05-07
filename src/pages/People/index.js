import { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { PeopleArea } from './styled';
import { Link, useParams } from 'react-router-dom';


export default function People() {
    const api = useApi();

    let { id } = useParams();

    const [peopleList, setPeopleList] = useState([]);
    const [planetList, setPlanetList] = useState([]);
    const [specieList, setSpecieList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    const [starshipList, setStarshipList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getPeople = async () => {
            const pList = await api.getPeople(id);
            setPeopleList(pList);
        }
        getPeople();
    }, []);

    useEffect(() => {
        const getPlanet = async () => {
            const plList = await api.getAllPlanets();
            setPlanetList(plList);
        }
        getPlanet();
    }, []);

    useEffect(() => {
        const getSpecie = async () => {
            const sList = await api.getAllSpecies();
            setSpecieList(sList);
        }
        getSpecie();
    }, []);

    useEffect(() => {
        const getVehicle = async () => {
            const vList = await api.getAllVehicles();
            setVehicleList(vList);
        }
        getVehicle();
    }, []);

    useEffect(() => {
        const getStarship = async () => {
            const sList = await api.getAllStarships();
            setStarshipList(sList);
        }
        getStarship();
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
            {peopleList.name &&
                <PeopleArea>
                    <div className="card">
                        <h1>{peopleList.name}</h1>

                        <div className="detailsPeople">

                            <div>
                                <h3>Gender: <span>{peopleList.gender}</span></h3>
                            </div>

                            <div>
                                <h3>Birth Year: <span>{peopleList.birth_year}</span></h3>
                            </div>

                            <div>
                                <h3>Height: <span>{peopleList.height}</span></h3>
                            </div>

                            <div>
                                <h3>Mass: <span>{peopleList.mass}</span></h3>
                            </div>

                            <div>
                                <h3>Homeworld:
                                {planetList.map((i, k) =>
                                    compare(i, peopleList.homeworld) &&
                                    <Link key={k + 1} to={`/planet/${i.url.replace('http://swapi.dev/api/planets/', '')}`}> <span>{i.name}</span></Link>
                                )}
                                </h3>
                            </div>

                            <div>
                                <h3>Skin Color: <span>{peopleList.skin_color}</span></h3>
                            </div>

                            <div>
                                <h3>Hair Color: <span>{peopleList.hair_color}</span></h3>
                            </div>

                            <div>
                                <h3>Eye Color: <span>{peopleList.eye_color}</span></h3>
                            </div>

                            <div>
                                <h3>Species:
                                    {peopleList.species.length > 0
                                        ? <>
                                            {
                                                specieList.map((i, k) =>
                                                    peopleList.species.map((j, key) =>
                                                        compare(i, j) &&
                                                        <Link key={k + 1} to={`/specie/${i.url.replace('http://swapi.dev/api/species/', '')}`}> <span> {i.name ? peopleList.species.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                    ))
                                            }
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Vehicles:
                                    {peopleList.vehicles.length > 0
                                        ? <>
                                            {vehicleList.map((i, k) =>
                                                peopleList.vehicles.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/vehicle/${i.url.replace('http://swapi.dev/api/vehicles/', '')}`}> <span> {i.name ? peopleList.vehicles.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Starships:
                                    {peopleList.starships.length > 0
                                        ? <>
                                            {starshipList.map((i, k) =>
                                                peopleList.starships.map((j, key) =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/starship/${i.url.replace('http://swapi.dev/api/starships/', '')}`}> <span> {i.name ? peopleList.starships.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Films:
                                    {peopleList.films.length > 0
                                        ? <>
                                            {filmsList.map((i, k) =>
                                                peopleList.films.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/film/${i.url.replace('http://swapi.dev/api/films/', '')}`}> <span> {i.title ? peopleList.films.length > 1 ? '(' + i.title + ')' : i.title : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                        </div>

                    </div>
                </PeopleArea>
            }
        </PageContainer>
    );
}