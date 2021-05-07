import react, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { SpeciesArea } from './styled';

export default function Species() {
    let { page } = useParams();

    const api = useApi();

    const [speciesList, setSpeciesList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        const getSpecie = async () => {
            const sList = await api.getSpecies(page);
            setSpeciesList(sList.results);
            setNext(sList.next);
            setPrevious(sList.previous);
        }
        getSpecie();
    }, []);

    return (
        <PageContainer>
            {speciesList[0] &&
                <SpeciesArea>
                    {speciesList.map((i, k) =>
                        <Link key={k} to={`/specie/${i.url.replace('http://swapi.dev/api/species/', '')}`}>
                            {i.name}
                        </Link>
                    )}

                    <div>
                        {previous
                            ? <a href={`/species/${previous.replace('http://swapi.dev/api/species/?page=', '')}`} className="buttonPrevious">Previous</a>
                            : <span className="buttonPrevious inative">Previous</span>
                        }

                        {next
                            ? <a href={`/species/${next.replace('http://swapi.dev/api/species/?page=', '')}`} className="buttonNext">Next</a>
                            : <span className="buttonNext inative">Next</span>
                        }
                    </div>
                </SpeciesArea>
            }
        </PageContainer >
    );
}