import Main from "./components/MainComponent";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {faMars, faVenus, faGenderless, faSignInAlt, faPlusCircle, faCircleNotch, faSpinner, faFlag, faSearch, faGlobe, faRunning, faSwimmer, faBiking, faHiking, faCircle, faQuestion, faWalking, faStopwatch, faMedal, faCalendarAlt, faFrown, faSadTear } from '@fortawesome/free-solid-svg-icons';

// fontawesome icons
library.add(faMars, faVenus, faGenderless, faSignInAlt, faPlusCircle, faCircleNotch, faSpinner, faFlag, faSearch, faGlobe, faRunning, faSwimmer, faBiking, faHiking, faCircle, faQuestion, faWalking, faStopwatch, faMedal, faCalendarAlt, faFrown, faSadTear);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Main />
      </div>
      <ReactQueryDevtools initialIIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
