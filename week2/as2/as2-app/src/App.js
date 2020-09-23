import React from 'react';

import Vacation from "./Vacation"
import vacationData from "./vacationData"

function App() {
  const vacationSpot = vacationData.map(vacation => <Vacation key={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />)
  
  return (
      <div>
          {vacationSpot}
      </div>
  )
}

export default App;
