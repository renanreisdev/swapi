import { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { SpecieArea } from './styled';
import { Link, useParams } from 'react-router-dom';


export default function Specie() {
    const api = useApi();

    let { id } = useParams();

    const [specieList, setSpecieList] = useState([]);
    const [planetList, setPlanetList] = useState([]);
    const [peopleList, setPeopleList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getSpecie = async () => {
            const sList = await api.getSpecie(id);
            setSpecieList(sList);
        }
        getSpecie();
    }, []);

    useEffect(() => {
        const getPlanet = async () => {
            const plList = await api.getAllPlanets();
            setPlanetList(plList);
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
            return compare1.url;
        }
    }

    return (
        <PageContainer>
            {specieList.name &&
                <SpecieArea>
                    <div className="card">
                        <h1>{specieList.name}</h1>

                        <div className="detailsSpecie">
                            <div>
                                <h3>Classification: <span>{specieList.classification}</span></h3>
                            </div>

                            <div>
                                <h3>Designation: <span>{specieList.designation}</span></h3>
                            </div>

                            <div>
                                <h3>Average Height: <span>{specieList.average_height}</span></h3>
                            </div>

                            <div>
                                <h3>Skin Colors: <span>{specieList.skin_colors}</span></h3>
                            </div>

                            <div>
                                <h3>Hair Colors: <span>{specieList.hair_colors}</span></h3>
                            </div>

                            <div>
                                <h3>Eye Colors: <span>{specieList.eye_colors}</span></h3>
                            </div>

                            <div>
                                <h3>Average Lifespan: <span>{specieList.average_lifespan}</span></h3>
                            </div>

                            <div>
                                <h3>Homeworld:
                                {planetList.map((i, k) =>
                                    compare(i, specieList.homeworld) &&
                                    <Link key={k + 1} to={`/planet/${i.url.replace('http://swapi.dev/api/planets/', '')}`}> <span>{i.name}</span></Link>
                                )}
                                </h3>
                            </div>

                            <div>
                                <h3>Language: <span>{specieList.language}</span></h3>
                            </div>

                            <div>
                                <h3>People:
                                    {specieList.people.length > 0
                                        ? <>
                                            {
                                                peopleList.map((i, k) =>
                                                    specieList.people.map((j, key) =>
                                                        compare(i, j) &&
                                                        <Link key={k + 1} to={`/people/${i.url.replace('http://swapi.dev/api/people/', '')}`}> <span> {i.name ? specieList.people.length > 1 ? '(' + i.name + ')' : i.name : 'n/a'}</span></Link>
                                                    ))
                                            }
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                            <div>
                                <h3>Films:
                                    {specieList.films.length > 0
                                        ? <>
                                            {filmsList.map((i, k) =>
                                                specieList.films.map(j =>
                                                    compare(i, j) &&
                                                    <Link key={k + 1} to={`/film/${i.url.replace('http://swapi.dev/api/films/', '')}`}> <span> {i.title ? specieList.films.length > 1 ? '(' + i.title + ')' : i.title : 'n/a'}</span></Link>
                                                ))}
                                        </>
                                        : <span> n/a</span>
                                    }
                                </h3>
                            </div>

                        </div>

                    </div>
                </SpecieArea>
            }
        </PageContainer>
    );
}