import { Octokit } from "octokit";
import { useState,useEffect } from "react";
function Repo_github() {
    const [repos, setRepos] = useState([]);
    const token: string = import.meta.env.VITE_GITHUB_TOKEN ;
    const octokit = new Octokit({ auth: token });
    useEffect(() => {
    octokit.request("GET /users/{owner}/repos", {
        owner: "KillianAngely",
    }).then((response) => {
        setRepos(response.data);
        console.log(response.status);
    }).catch((error) => {
        console.error(error);
    });
}, []);

    return (
        <div>
            {repos.map((repo :any) => (
                <div>
                    <a href={repo.html_url}>{repo.name}</a>
                    <div>
                    <p>{repo.description}</p>
                    <p>{repo.language}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Repo_github;