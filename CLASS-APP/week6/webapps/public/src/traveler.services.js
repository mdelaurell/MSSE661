const TRAVELER_API = `${BASE_API_URL}/traveler`;

const getTraveler = () => _get(TRAVELER_API, OPTIONS_WITH_AUTH);

const addTask = (formData) => 
    _post(TASKS_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

const deleteTask = (taskID) =>
    _delete(`${TASKS_API}/${taskID}`, OPTIONS_WITH_AUTH);