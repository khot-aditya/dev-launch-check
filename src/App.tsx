import React from 'react';
import { Home } from './components/pages/home';
import { FC, useState, createContext } from 'react';
import { SectionInterface, dataArray } from './list';

type Interface = {
  data: SectionInterface[];
  setData: (data: SectionInterface[]) => void;
};

export const GlobalContext = createContext<Interface>({} as Interface);

function App() {

  const localData = localStorage.getItem('list');

  const [data, setData] = useState<SectionInterface[]>(localData ? JSON.parse(localData) : dataArray);

  return (
    <GlobalContext.Provider value={{
      data,
      setData
    }}>

      <div className="bg-base-100 h-100 background-pattern">
        <Home />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;