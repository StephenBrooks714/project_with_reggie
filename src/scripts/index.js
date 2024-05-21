fetch("https://swapi.dev/api/people/0/")
.then((data) => {
    data.json()
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
})
.catch((err) => console.log(err))