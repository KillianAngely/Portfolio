import requests
import os
from dotenv import load_dotenv
load_dotenv()


class GithubApi:
    def __init__(self, owner,token):
        self.owner = owner
        self.token = token

    def get_all_repo(self):
        headers = {
            "Authorization": f"token {self.token}"
        }
        response = requests.get(f"https://api.github.com/users/{self.owner}/repos", headers=headers)
        try:
            response.raise_for_status()
            response = response.json()
            filter = ["name","html_url","description","created_at","updated_at"]
            return [{key: repo[key] for key in filter} for repo in response]
        
        except requests.exceptions.HTTPError as err:
            raise SystemExit(err)
        

if __name__ == "__main__":
    github_api = GithubApi("KillianAngely",os.getenv("GITHUB_TOKEN"))
    print(github_api.get_all_repo())

