import Get_github_api from "../useCases/Github_api";
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
       <section>
              <h2>Github Repos</h2>
              <ul>
                {data?.map((repo: any) => (
                     <li key={repo.id}>
                        <div>
                            <span>{repo.name}</span>
                            <span>{repo.description}</span>
                            <span>{repo.language}</span>
                        </div>
                    </li>
                ))}
              </ul>
         </section>
    );
};

export default GithubRepo;
