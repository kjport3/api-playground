async function fetchWord(searchTerm) {
    let url = `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/definitions`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      },
    });
    const data = await res.json();
    const definitions = data.definitions;
    let definitionsList = '';

    definitions.forEach(element => {
        definitionsList += `<li>${element.definition}</li>`;
    });
        

    console.log(data);
    
    // let definition = '';
    // data.forEach((definitions) => {
    //     definition += `<li>${definitions.definition}</li>`;
    // });

    document.getElementById("result").innerHTML = `
    <h1>Dictionary</h1>
    <h2>Word:</h2>
    ${data.word}<br>
    <h3>Definitions:</h3>
    ${definitionsList}
    `;
  }
  
  fetchWord('banana');