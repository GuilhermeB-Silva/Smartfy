import { useState } from 'react';
import {Container} from './style'
import {MovieCards} from '../MovieCards/index'
import {SeriesCards} from '../SeriesCards/index'


import { Tabs,Tab } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

export function TabCards(){

    const [key, setKey] = useState<string | null>('movie');

    return(
        <Container>
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="movie" title="Filmes">
                <MovieCards/>
            </Tab>
            <Tab eventKey="tv" title="Séries">
                <SeriesCards/>
            </Tab>
          </Tabs>
        </Container>
    )
}