import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MainContainer from '../_containers/pokemonsList';
import CollectionContainer from '../_containers/collection';
import PokemonContainer from '../_containers/pokemon';
import Navigation from './content/Navigation';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 mx-auto">
                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={MainContainer}/>
                        <Route path='/collection' component={CollectionContainer} />
                        <Route path='/pokemon-card/:id' component={PokemonContainer} />
                        <Route path='/login' component={MainContainer}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default App;