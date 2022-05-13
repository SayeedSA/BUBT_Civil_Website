import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Gallery from "./components/Gallery/Gallery";
import Chairman_Message from "./components/Chairman_Message/Chairman_Message";
import FacultyMembers from './components/FacultyMembers/FacultyMembers';
import OurLabs from './components/OurLabs/OurLabs';
import CivilClub from './components/CivilClub/CivilClub';
import CareerOpportunities from './components/CareerOpportunities/CareerOpportunities';
import Mission from './components/Mission/Mission';
import Vision from './components/Vision/Vision';
import Achievements from './components/Achievements/Achievements';
import WhyCivilAtBUBT from './components/WhyCivilAtBUBT/WhyCivilAtBUBT';

import LabAssistants from "./components/LabAssistants/LabAssistants";
import AdministrativeStaffs from "./components/AdministrativeStaffs/AdministrativeStaffs";
import Undergraduate from './components/Undergraduate/Undergraduate';
import Footers from './components/Footers/Footers';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/ChairmanMessage">
            <Chairman_Message />
          </Route>
          <Route path="/FacultyMembers">
            <FacultyMembers />
          </Route>
          <Route path="/LabAssistants">
            <LabAssistants />
          </Route>
          <Route path="/AdministrativeStaffs">
            <AdministrativeStaffs />
          </Route>
          <Route path="/OurLabs">
            <OurLabs/>
          </Route>
          <Route path="/CivilClub">
            <CivilClub/>
          </Route>
          <Route path="/CareerOpportunities">
            <CareerOpportunities/>
          </Route>
          <Route path="/Vision">
            <Vision/>
          </Route>
          <Route path="/Mission">
            <Mission/>
          </Route>
          <Route path="/Achievements">
            <Achievements/>
          </Route>
          <Route path="/WhyCivilAtBUBT">
            <WhyCivilAtBUBT/>
          </Route>
          <Route path="*">
          <Route path="/Footers">
            <Footers/>
          </Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
