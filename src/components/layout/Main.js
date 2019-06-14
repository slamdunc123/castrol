import React from 'react';
import { Switch, Route } from 'react-router-dom';

// views components
import Disclaimer from '../views/Disclaimer';
import LearnMore from '../views/LearnMore';
import Home from '../views/Home';
import Intro from '../views/Intro';
import FleetInputs from '../views/FleetInputs';
import Results from '../views/Results';
import Summary from '../views/Summary';

const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/disclaimer" component={Disclaimer} />
                <Route path="/learnmore" component={LearnMore} />
                <Route path="/intro" component={Intro} />
                <Route path="/fleetinputs" component={FleetInputs} />
                <Route path="/results" component={Results} />
                <Route path="/summary" component={Summary} />
            </Switch>
        </div>
    )
}

export default Main;