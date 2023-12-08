import Get_github_api from "../useCases/Github_api";
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
                    <div key={repo.id} className='display_list'>
                        <div className="rows__title">
                            <h3><a href={repo.html_url}>{repo.name}</a></h3>
                        </div>
                        <div className="rows__description">
                            <p>{repo.description}</p>
                            <p>{repo.language}</p>
                        </div>
                    </div>
                ))}
         </section>
    );
};

export default GithubRepo;
