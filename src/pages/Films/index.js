import react, { useEffect, useState } from 'react';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { FilmsArea } from './styled';
import { Link } from 'react-router-dom';

export default function Films() {
    const api = useApi();
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            const fList = await api.getFilms();
            setFilmsList(fList);
        }
        getFilms();
    }, []);

    return (
        <PageContainer>
            <FilmsArea>
                {filmsList.map((i, k) =>
                    <Link key={k + 1} to={`/film/${k + 1}`}>{i.title}</Link>
                )}
            </FilmsArea>
        </PageContainer >
    );
}
