import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { PlanetArea } from './styled';

export default function Planet() {
    const api = useApi();

    let { id } = useParams();

    const [planetList, setPlanetList] = useState([]);
    const [peopleList, setPeopleList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getPlanet = async () => {
            const pList = await api.getPlanet(id);
            setPlanetList(pList);
        }
        getPlanet();
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
            return compare1.url
        }
    }

    return (
        <PageContainer>
            {planetList.name &&
                <PlanetArea>
                    <div className="card">
                        <h1>{planetList.name}</h1>

                        <div className="detailsPlanet">
                            <div>
                                <h3>Rotation Period: <span>{planetList.rotation_period}</span></h3>
                            </div>

                            <div>
                                <h3>Orbital Period: <span>{planetList.orbital_period}</span></h3>
                            </div>

                            <div>
                                <h3>Diameter: <span>{planetList.diameter}</span></h3>
                            </div>

                            <div>
                                <h3>Climate: <span>{planetList.climate}</span></h3>
                            </div>

                            <div>
                                <h3>Gravity: <span>{planetList.gravity}</span></h3>
                            </div>

                            <div>
                                <h3>Terrain: <span>{planetList.terrain}</span></h3>
                            </div>

                            <div>
                                <h3>Surface Water: <span>{planetList.surface_water}</span></h3>
                            </div>

                            <div>
                                <h3>Population: <span>{planetList.population}</span></h3>
                            </div>

                            <div>
                                <h3>Residents:
                                    {planetList.residents.length > 0
                                        ? <>
                                            {
                                                peopleList.map((i, k) =>
                                                    planetList.residents.map((j, key) =>
                                                        compare(i, j) &&
                                                        <Link key={k + 1} to={`/planet/${i.url.replace('http://swapi.dev/api/planets/', '')}`}> <span> {i.name ? '(' + i.name + ')' : 'n/a'}</span></Link>
                                                    ))
                                            }
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Films:
                                    {planetList.films.length > 0
                                        ? <>
                                            {filmsList.map((i, k) =>
                                                planetList.films.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/film/${i.url.replace('http://swapi.dev/api/films/', '')}`}> <span> {i.title ? planetList.films.length > 1 ? '(' + i.title + ')' : i.title : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                        </div>
                    </div>
                </PlanetArea>
            }
        </PageContainer>
    );
}