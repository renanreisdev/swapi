import react from 'react';

import { PageContainer } from '../../components/MainComponents';
import { NotFoundArea } from './styled';


export default function NotFound() {
    return (
        <PageContainer>
            <NotFoundArea>
                <span>Page Not Found!</span>
            </NotFoundArea>
        </PageContainer>
    );
}