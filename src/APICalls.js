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

export const deleteDataToAPI = (URL) => {
  return fetch(URL, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};



export const postDataToAPI = (URL, jsonData) => {
  console.log(URL,jsonData)
  return fetch(URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  }).then((res) => {
    return res.json();
  });
};

export const putDataToAPI = (URL, jsonData) => {
  return fetch(URL, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  }).then((res) => {
    return res.json();
  });
};
