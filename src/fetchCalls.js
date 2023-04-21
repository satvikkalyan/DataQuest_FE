

export const getDataFromAPI = (URL) => {
    return fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      })
      .catch(function (data) {
        return {};
      });
  };

  