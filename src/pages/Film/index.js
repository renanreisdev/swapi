import react, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { FilmsArea } from './styled';
import { romanJs } from '../../helpers/roman';

export default function Film() {
    let { id } = useParams();

    const api = useApi();
    const [film, setFilm] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getFilm = async () => {
            const fList = await api.getFilm(id);
            setFilm(fList);
        }
        getFilm();
    }, []);

    useEffect(() => {
        const getPeople = async () => {
            const pList = await api.getAllPeople();
            setPeople(pList);
        }
        getPeople();
    }, []);

    const character = (compare1, compare2) => {
        if (compare1.url == compare2) {
            return compare1.name
        }
    }

    return (
        <PageContainer>
            {film.title &&
                <FilmsArea>
                    <h1>{film.title} - Episode {romanJs(film.episode_id)}</h1>

                    <div className="details-film">
                        <div>
                            <h3>Release Date:</h3>
                            <p>{film.release_date}</p>
                        </div>

                        <div>
                            <h3>Director:</h3>
                            <p>{film.director}</p>
                        </div>

                        <div>
                            <h3>Producer:</h3>
                            <p>{film.producer}</p>
                        </div>
                    </div>

                    <h3>Characters:</h3>

                    <div className="people">
                        {people.map((i, k) =>
                            film.characters.map((j) =>
                                character(i, j) &&
                                <Link key={k + 1} to={`/people/${i.url.replace('http://swapi.dev/api/people/', '')}`}>{i.name}</Link>
                            )
                        )}
                    </div>

                    <h3>Opening Crawl:</h3>
                    <p>{film.opening_crawl}</p>
                </FilmsArea>
            }
        </PageContainer >
    );
}
