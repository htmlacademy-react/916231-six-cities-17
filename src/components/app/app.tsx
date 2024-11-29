import Main from '../../pages/main/main';
import {OFFERS} from '../../data';

function App(): JSX.Element {
  return (
    <Main
      offers={OFFERS}
    />
  );
}

export default App;
