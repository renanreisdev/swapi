import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import useApi from '../../helpers/SwAPI';
import { PageContainer } from '../../components/MainComponents';
import { VehiclesArea } from './styled';

export default function Vehicles() {
    let { page } = useParams();

    const api = useApi();

    const [vehiclesList, setVehiclesList] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    useEffect(() => {
        const getVehicle = async () => {
            const vList = await api.getVehicles(page);
            setVehiclesList(vList.results);
            setNext(vList.next);
            setPrevious(vList.previous);
        }
        getVehicle();
    }, []);

    return (
        <PageContainer>
            {vehiclesList[0] &&
                <VehiclesArea>
                    {vehiclesList.map((i, k) =>
                        <Link key={k} to={`/vehicle/${i.url.replace('http://swapi.dev/api/vehicles/', '')}`}>
                            {i.name}
                        </Link>
                    )}

                    <div>
                        {previous
                            ? <a href={`/vehicles/${previous.replace('http://swapi.dev/api/vehicles/?page=', '')}`} className="buttonPrevious">Previous</a>
                            : <span className="buttonPrevious inative">Previous</span>
                        }

                        {next
                            ? <a href={`/vehicles/${next.replace('http://swapi.dev/api/vehicles/?page=', '')}`} className="buttonNext">Next</a>
                            : <span className="buttonNext inative">Next</span>
                        }
                    </div>
                </VehiclesArea>
            }
        </PageContainer >
    );
}