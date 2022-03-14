import Main from "./components/MainComponent";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {faMars, faVenus, faGenderless, faSignInAlt, faPlusCircle, faCircleNotch, faSpinner, faFlag, faSearch, faGlobe, faRunning, faSwimmer, faBiking, faHiking, faCircle, faQuestion, faWalking, faStopwatch, faMedal, faCalendarAlt, faFrown, faSadTear } from '@fortawesome/free-solid-svg-icons';

// fontawesome icons
library.add(faMars, faVenus, faGenderless, faSignInAlt, faPlusCircle, faCircleNotch, faSpinner, faFlag, faSearch, faGlobe, faRunning, faSwimmer, faBiking, faHiking, faCircle, faQuestion, faWalking, faStopwatch, faMedal, faCalendarAlt, faFrown, faSadTear);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <Main />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
