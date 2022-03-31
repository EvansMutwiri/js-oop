(function () {
  "use strict";

  const getData = async () => {
    const response = await fetch("https://swapi.dev/api/people/?page=1");
    const data = await response.json();

    // console.table(data.results);

    return data;
  };

  getData()
    .then((data) => console.log(data.results));
    
})();
