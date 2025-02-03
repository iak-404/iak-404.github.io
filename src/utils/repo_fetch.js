const username = 'iak-404'; 
const apiUrl = `https://api.github.com/users/${username}/repos`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Ausgabe der Repositories in der Konsole
    data.forEach(repo => {
      console.log(`Repo Name: ${repo.name}`);
      console.log(`URL: ${repo.html_url}`);
      console.log(`Description: ${repo.description || 'No description'}`);
      console.log('-------------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });