import react, { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { PlanetsArea } from './styled';
import { Link, useParams } from 'react-router-dom';


export default function Planets() {
    let { page } = useParams();

    const api = useApi();

    const [planetList, setPlanetList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        const getPlanet = async () => {
            const pList = await api.getPlanets(page);
            setPlanetList(pList.results);
            setNext(pList.next);
            setPrevious(pList.previous);
        }
        getPlanet();
    }, []);

    return (
        <PageContainer>
            {planetList[0] &&
                <PlanetsArea>
                    {planetList.map((i, k) =>
                        <Link key={k} to={`/planet/${i.url.replace('http://swapi.dev/api/planets/', '')}`}>
                            {i.name}
                        </Link>
                    )}

                    <div>
                        {previous
                            ? <a href={`/planets/${previous.replace('http://swapi.dev/api/planets/?page=', '')}`} className="buttonPrevious">Previous</a>
                            : <span className="buttonPrevious inative">Previous</span>
                        }

                        {next
                            ? <a href={`/planets/${next.replace('http://swapi.dev/api/planets/?page=', '')}`} className="buttonNext">Next</a>
                            : <span className="buttonNext inative">Next</span>
                        }
                    </div>

                </PlanetsArea>
            }
        </PageContainer >
    );
}