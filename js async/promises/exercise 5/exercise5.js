let repoContainer = document.querySelector('.js-repo-container');

fetch('https://api.github.com/users/bitcoin/repos')
    .then(data => data.json())
    .then(response => {
        // eeroneous response is not an array, but an object
        if (!Array.isArray(response)) {
            throw 'erroneous response'
        }
        let processedResponse = response.map(repo => `
            <li>
                <a href = "${repo.url}">${repo.name}</a>
                (forks: ${repo.forks})
            </li?
            `)
            .join('');
        repoContainer.innerHTML = processedResponse;
    })
    .catch(err => {
        console.warn(err);
        repoContainer.innerHTML = `<p>error fetching repo ${repoName}</p>`;
    });

function formSubmitted(event) {
    event.preventDefault();
    let repoName = repoInput.value;
    fetchRepo(repoName);
}

form.addEventListener('submit',formSubmitted);

