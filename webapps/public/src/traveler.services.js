const TRAVELER_API = `${BASE_API_URL}/travelers`;

const getTraveler = () => _get(TRAVELER_API, OPTIONS_WITH_AUTH);

const addTraveler = (formData) => 
    _post(TRAVELER_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteTraveler = (travelerID) =>
    _delete(`${TRAVELER_API}/${travelers_ID}`, OPTIONS_WITH_AUTH);