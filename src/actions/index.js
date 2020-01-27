
export default function setActiveCity(city) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
}
