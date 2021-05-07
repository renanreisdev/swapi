import react, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { StarshipsArea } from './styled';

export default function Starships() {
    let { page } = useParams();

    const api = useApi();

    const [starshipsList, setStarshipsList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        const getStarship = async () => {
            const sList = await api.getStarships(page);
            setStarshipsList(sList.results);
            setNext(sList.next);
            setPrevious(sList.previous);
        }
        getStarship();
    }, []);

    return (
        <PageContainer>
            {starshipsList[0] &&
                <StarshipsArea>
                    {starshipsList.map((i, k) =>
                        <Link key={k} to={`/starship/${i.url.replace('http://swapi.dev/api/starships/', '')}`}>
                            {i.name}
                        </Link>
                    )}
                    <div>
                        {previous
                            ? <a href={`/starships/${previous.replace('http://swapi.dev/api/starships/?page=', '')}`} className="buttonPrevious">Previous</a>
                            : <span className="buttonPrevious inative">Previous</span>
                        }

                        {next
                            ? <a href={`/starships/${next.replace('http://swapi.dev/api/starships/?page=', '')}`} className="buttonNext">Next</a>
                            : <span className="buttonNext inative">Next</span>
                        }
                    </div>

                </StarshipsArea>
            }
        </PageContainer >
    );
}