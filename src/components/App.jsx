import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Welcome :)"}/>
    </div>
  );
}

export default App;