import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {Test , Scenario, ModeratedTest, Survey, TestProduct} from './pages/Test';
import {Result, Analysis, Presentation} from './pages/Result';
import {Public, Repertory, Community, TestValidation, ExpertTester} from './pages/Public';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Dashboard} />
        <Route path='/test' exact component={Test} />
        <Route path='/test/scenario' exact component={Scenario} />
        <Route path='/test/moderatedtest' exact component={ModeratedTest} />
        <Route path='/test/survey' exact component={Survey} />
        <Route path='/test/testproduct' exact component={TestProduct} />
        <Route path='/result' exact component={Result} />
        <Route path='/result/analysis' exact component={Analysis} />
        <Route path='/result/presentation' exact component={Presentation} />
        <Route path='/tester' exact component={Public} />
        <Route path='/tester/repertory' exact component={Repertory} />
        <Route path='/tester/community' exact component={Community} />
        <Route path='/tester/testvalidation' exact component={TestValidation} />
        <Route path='/tester/experttester' exact component={ExpertTester} />
      </Switch>
    </Router>
    
  );
}

export default App;