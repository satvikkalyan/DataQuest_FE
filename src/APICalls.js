

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

  export const postDataToAPI = (URL, jsonData) => {
    return fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    }).then(res => res.json());
  };