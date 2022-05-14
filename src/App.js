import './axios/global';
import Title from './components/Title';
import Setup from './examples/globalInstance';
function App() {
  return (
    <main>
      <Title />
      {/* main code starts here */}
      <Setup></Setup>
    </main>
  );
}

export default App;
