import Get_github_api from "../useCases/Github_api";
import "../styles/Github.css";
import React, { useEffect, useState } from "react";

const GithubRepo: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const get_github_api = new Get_github_api("GET /users/{owner}/repos","KillianAngely");
        const fetchData = async () => {
            const response = await get_github_api.get_github_api();
            setData(response);
            console.log(response);
        };
        fetchData();
    }, []);

    return (
       <section>
              <h2>Github Repos</h2>
                {data?.map((repo: any) => (
                    <div key={repo.id} className="repo_inner cool_list">
                        <h3><a href={repo.html_url}>{repo.name}</a></h3>
                        <ul>
                            <li>{repo.description}</li>
                            <li>{repo.language}</li>
                        </ul>
                    </div>
                ))}
         </section>
    );
};

export default GithubRepo;
