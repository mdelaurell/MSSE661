const access_token = storageHasData() ? getStorage('access_token') : '';
const token = `Bearer ${access_token}`;

const DEFAULT_OPTIONS = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const DEFAULT_OPTIONS_WITH_AUTH = {
    headers: {
        Authorization: token,
        'Content-Type': 'application/json',
    },
};

const OPTIONS_WITH_AUTH = {
    headers: {
        Authorization: token,
    },
};

/**
 * 
 * @param {string} url 
 * @param {any} options 
 */

const _get = async(url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
    const res = await fetch(url, {
        method: 'GET',
        ... options,
    });
    return res.json();
};

/**
 * Generic Create API handler.
 *
 * @param {string} url - address to make request to
 * @param {any} data - updates to send
 * @param {any} options - additional options to send. Defaults to options with normal headers
 */
const _post = async (url, data, options = DEFAULT_OPTIONS) => {
    const res = await fetch(url, {
      method: 'POST',
      ...options,
      body: JSON.stringify(data),
    });
  
    return res.json();
  };

/**
 * 
 * @param {string} url 
 * @param {any} data 
 * @param {any} options 
 */
const _put = async(url,data, options = DEFAULT_OPTIONS_WITH_AUTH) => {
    const res = await fetch(url, {
        method: 'PUT',
        ... options,
    });
    return res.json();
};

/**
 * 
 * @param {string} url 
 * @param {any} options 
 */
const _delete = async (url, options = DEFAULT_OPTIONS_WITH_AUTH) => {
    const res = await fetch(url, {
        method: 'DELETE',
        ... options,
    });
    return res.json();
};