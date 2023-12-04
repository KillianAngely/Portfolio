import { Octokit } from "octokit";
function Repo_github() {
    const token: string = import.meta.env.VITE_GITHUB_TOKEN ;
    const octokit = new Octokit({ auth: token });

    octokit.request("GET /users/{owner}/repos", {
        owner: "KillianAngely",
    }).then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].name)
            console.log(response.data[i].html_url)
            console.log(response.data[i].description)
            console.log(response.data[i].language)
        }
    }).catch((error) => {
        console.error(error);
    });

    return (
        null
    )
}
export default  Repo_github