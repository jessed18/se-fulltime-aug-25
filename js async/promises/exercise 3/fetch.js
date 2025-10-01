fetch('https://api.github.com/users/bitcoin/repos')
    .then(data => data.json())
    .then(response => {
        let processedResponse = response.map(repo => []);
        console.log(processedResponse);
    });