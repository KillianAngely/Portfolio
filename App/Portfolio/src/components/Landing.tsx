import { useEffect, useState } from 'react';
import Get_github_api from '../useCases/Github_api';

const Landing = () => {
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const get_profil_user = new Get_github_api("GET /users/KillianAngely", "KillianAngely");
            const response = await get_profil_user.get_github_api();
            console.log(response)
            setResponse(response);
        };

        fetchData();
    }, []);

    return (
        <section>
            <h2>Landing</h2>
            <ul>
                <li>{response?.name}</li>
                <li>{response?.bio}</li>
                <li><span>Curently working in </span>{response?.location}</li>
            </ul>
        </section>
    );
};

export default Landing;
            
