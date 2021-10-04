// Fichero src/components/App.js
import "../styles/Reset.scss";
import "../styles/App.scss";

import { useEffect, useState } from "react";
import api from "../services/api"; // Importamos el servicio que acabamos de crear
import { Switch, useRouteMatch, Route } from "react-router-dom";
import ls from "../services/local-storages";

//importar componentes:
import Header from "./Header";
import Filters from "./Filters";
import RenderCharList from "./RenderCharList";
import CharCard from "./CharCard";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState(ls.get("name", ""));
  const [selectSepecies, setSelectSpecies] = useState("All");


  useEffect(() => {
    if (ls.get('char', []).length > 0) {
      console.log(ls.get('char', []));
      setData(ls.get('char', []));
    } else {
      api.callToApi().then((initialData) => {
        console.log(initialData);
        setData(initialData);
        ls.set('char', initialData);
      });
    }
  }, []);

  //GUARDAR NAME EN LOCAL STORAGE
  useEffect(() => {
    ls.set("name", searchName);
  }, [searchName]);
  // FUNCTION INPUTS SEARCH NAME AND SELECT INPUT

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleSelect = (value) => {
    setSelectSpecies(value);
  };

  //filter

  const FilteredData = data

    .filter((char) => {
      const charName = char.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase());
      if (charName === false) {
        return console.log('error');
      } else {
        return charName;
      }
    })

    .filter(
      (char) => selectSepecies === "All" || selectSepecies === char.species
    )

    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });


  //ROUTER

  const routeData = useRouteMatch("/character/:characterId");
  console.log(routeData)
  const charId = routeData != null ? routeData.params.characterId : "";
  const selectedChar = data.find((char) => {
    return char.id === parseInt(charId);
  });


  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <main className='main'>
            <Filters
              searchName={searchName}
              selectSepecies={selectSepecies}
              handleSearchName={handleSearchName}
              handleSelect={handleSelect}
            />
            <RenderCharList data={FilteredData} />
          </main>

        </Route>

        <Route path="/character/:characterId">
          <CharCard char={selectedChar} />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />

    </>
  );
}

export default App;
