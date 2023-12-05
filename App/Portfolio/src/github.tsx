import Get_github_api from "./useCase/Github_api";
import React, { useEffect, useState } from "react";

const GithubRepo: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const get_github_api = new Get_github_api("GET /users/{owner}/repos","KillianAngely");
        const fetchData = async () => {
            const response = await get_github_api.get_github_api();
            setData(response);
        };
        fetchData();
    }, []);

    return (
       <div>
              <h1>Github API</h1>
              <ul>
                {data?.map((repo: any) => (
                     <li>
                        <div>
                            <span>{repo.name}</span>
                            <span>{repo.description}</span>
                            <span>{repo.language}</span>
                        </div>
                    </li>
                ))}
              </ul>
         </div>
    );
};

export default GithubRepo;
