const TRAVELER_API = `${BASE_API_URL}/traveler`;

const getTraveler = () => _get(TRAVELER_API, OPTIONS_WITH_AUTH);

const addtraveler = (formData) => 
    _post(TRAVELER_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deletetraveler = (travelerID) =>
    _delete(`${TRAVELER_API}/${travelerID}`, OPTIONS_WITH_AUTH);