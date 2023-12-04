import Get_github_api from "./useCase/Github_api";

function Repo_github() {
    const get_github_api = new Get_github_api("GET /users/{owner}/repos","KillianAngely");
    const data = get_github_api.get_github_api();
    console.log(data);
}
export default Repo_github;