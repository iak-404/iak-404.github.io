import React, { useState, useEffect } from "react";
import '../styles/projects.css';

// RepositoriesList-Komponente
const RepositoriesList = ({ username }) => {
  const [repos, setRepos] = useState([]); // Zustand für die Repositories
  const [loading, setLoading] = useState(true); // Zustand für Ladeanzeige
  const [error, setError] = useState(null); // Zustand für Fehlerbehandlung

  useEffect(() => {
    // Funktion zum Abrufen der Repositories
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        const data = await response.json();
        setRepos(data); // Setze die Repositories in den Zustand
      } catch (error) {
        setError(error); // Fehler im Zustand speichern
      } finally {
        setLoading(false); // Ladeanzeige ausschalten
      }
    };

    fetchRepos(); // API-Aufruf
  }, [username]); // useEffect wird nur bei einer Änderung von "username" ausgeführt

  if (loading) {
    return <p>Loading...</p>; // Ladeanzeige
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Fehleranzeige
  }

  return (
    <div>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Projects-Komponente
const Projects = () => {
  const username = "iak-404"; // Hier kannst du den gewünschten GitHub-Nutzernamen angeben

  return (
    <div className="projects">
        <div className="projects-container">
            <h1>Projects Page</h1>
            {/* Die RepositoriesList-Komponente wird hier verwendet */}
            <RepositoriesList username={username} />
        </div>
    </div>
  );
};

export default Projects;
