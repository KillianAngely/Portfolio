import { Octokit } from "octokit";

class Get_github_api{
    path: string;
    owner: string;
    token: string = import.meta.env.VITE_GITHUB_TOKEN ;
    octokit = new Octokit({ auth: this.token });

    constructor(path: string, owner: string) {
        this.path = path;
        this.owner = owner;
    }

    async get_github_api() {
        const response = await this.octokit.request(this.path, {
            owner: this.owner,
        }).then((response) => {
            return response.data;
        }
        ).catch((error) => {
            console.log(error);
        });
        return response;
    }
    
}

export default Get_github_api;