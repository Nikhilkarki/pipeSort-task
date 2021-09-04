import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Ecommerce from "./components/ecommerce/Ecommerce";
import Form from "./components/form/Form";
import HomeComponent from "./components/HomeComponent";
import List from "./components/list/List";

function App() {
  // states

  const [dataList, setDataList] = useState([]);

  // data fetching
  async function fetchData(url, setTo) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTo(data);
    } catch (error) {
      console.log(error);
    }
  }

  // use Effect
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users", setDataList);
  }, []);
  console.log(dataList);

  return (
    <Router>
      <ModalSwitch dataList={dataList} />
    </Router>
  );
}

function ModalSwitch(props) {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <Switch location={background || location}>
      <Route exact path="/">
        <HomeComponent />
      </Route>
      <Route path="/ecommerce">
        <Ecommerce />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/list">
        <List dataList={props.dataList} />
      </Route>
    </Switch>
  );
}
export default App;
