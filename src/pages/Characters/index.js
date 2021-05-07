import { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { CharactersArea } from './styled';
import { Link, useParams } from 'react-router-dom';


export default function Characters() {
    let { page } = useParams();

    const api = useApi();

    const [peopleList, setPeopleList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        const getPeople = async () => {
            const pList = await api.getCharacters(page);
            setPeopleList(pList.results);
            setNext(pList.next);
            setPrevious(pList.previous);
        }
        getPeople();
    }, []);

    return (
        <PageContainer>
            {peopleList[0] &&
                <CharactersArea>
                    {peopleList.map((i, k) =>
                        <Link key={k} to={`/people/${i.url.replace('http://swapi.dev/api/people/', '')}`}>
                            {i.name}
                        </Link>
                    )}

                    <div>
                        {previous
                            ? <a href={`/characters/${previous.replace('http://swapi.dev/api/people/?page=', '')}`} className="buttonPrevious">Previous</a>
                            : <span className="buttonPrevious inative">Previous</span>
                        }

                        {next
                            ? <a href={`/characters/${next.replace('http://swapi.dev/api/people/?page=', '')}`} className="buttonNext">Next</a>
                            : <span className="buttonNext inative">Next</span>
                        }
                    </div>

                </CharactersArea>
            }
        </PageContainer >
    );
}