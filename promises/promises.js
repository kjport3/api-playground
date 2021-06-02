const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
  
        const error = false;
  
        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong");
        }
      }, 2000);
    });
  }
  
  // createPost({ title: 'Post Three', body: 'This is post three' })
  // .then(getPosts)
  // .catch(err => console.log(err));
  
  // // Promise.all
  // const promise1 = Promise.resolve('Hello World');
  // const promise2 = 10;
  // const promise3 = new Promise((resolve, reject) => {
  //     setTimeout(resolve, 2000, 'Goodbye')
  // });
  // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  
  // Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
  
  // // ASYNC / AWAIT
  // async function init() {
  //     await createPost({ title: 'Post Three', body: 'This is post three' });
  
  //     getPosts();
  // }
  
  // init();
  
  // // ASYNC / AWAIT with fetch()
  // async function fetchUsers() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const data = await res.json();
  //     let todos = '';
  //     let completed = '';
  //     data.forEach((todo) => {
  //         if(todo.completed === false) {
  //             todos += `<li>${todo.title}</li>`;
  //         } else {
  //             completed += `<li>${todo.title}</li>`
  //         }
  //     });
  //     document.body.innerHTML = `<h1>Todo:</h1>${todos}<br><h1>Completed:</h1>${completed}`;
  // }
  
  // fetchUsers();
  
  // // fetch() weather
  // async function fetchWeather() {
  //     let weather = "https://community-open-weather-map.p.rapidapi.com/find?q=atlanta&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric";
  //     const res = await fetch(weather, {
  //         "method": "GET",
  //         "headers": {
  //             "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
  //             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
  //         }
  //     });
  //
  // }
  
  // fetchWeather(30002);
  
  async function fetchWeather(location) {
    let url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lang=en&units=imperial`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    });
    const data = await res.json();
    console.log(data);
    const weather = data.main;
    document.body.innerHTML = `
    <h1>${data.name} Weather</h1>
    <h2>Temperature:</h2>
    ${weather.temp}<br>
    <h2>Feels Like:</h2>
    ${weather.feels_like}
    <h2>Humidity</h2>
    ${weather.humidity}%
    <h2>Conditions</h2>
    ${data.weather[0].description}
    <h2>Wind</h2>
    ${data.wind.speed} mph
    `;
  }
  
  fetchWeather("Atlanta");
  