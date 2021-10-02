// Fichero src/components/App.js
import '../styles/Reset.scss';
import '../styles/App.scss';

import { useEffect, useState } from "react";
import api from "../services/api"; // Importamos el servicio que acabamos de crear
import { Switch, useRouteMatch, Route } from "react-router-dom";
import ls from "../services/local-storages";

//importar componentes: 
import Header from './Header';
import Filters from './Filters';
import RenderCharList from './RenderCharList';


function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState(ls.get("name", ""));
  const [selectSepecies, setSelectSpecies] = useState("All");

  //FETCH FORM API 
  useEffect(() => {
    api.callToApi().then((response) => {
      setData(response);
    });
  }, []);

  //GUARDAR NAME EN LOCAL STORAGE
  useEffect(() => {
    ls.set("name", searchName);
  }, [searchName]);
  // FUNCTION INPUTS SEARCH NAME AND SELECT INPUT

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleSelect = (ev) => {
    setSelectSpecies(ev.currentTarget.value);
  };

  //filter

  const FilteredData = data
    .filter((char) =>
      char.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (char) => selectSepecies === "All" || selectSepecies === char.species
    );

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Filters
            searchName={searchName}
            selectSepecies={selectSepecies}
            handleSearchName={handleSearchName}
            handleSelect={handleSelect}
          />
          <RenderCharList data={FilteredData} />
        </Route>
      </Switch>
    </>
  );
}

export default App;