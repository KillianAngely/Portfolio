import { useEffect, useState } from 'react';
import Get_github_api from '../useCases/Github_api';
import "../styles/Landing.css";

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
            <div className='landing_container'>
                <div className='rows__title tiny_center_start'>
                    <h2>{response?.name}</h2>
                    <p className='text_center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur atque similique, dicta doloremque eligendi id quos fuga ullam possimus non. Voluptas sequi exercitationem animi tempore laborum vitae dolorem laudantium odio!
                    </p>
                </div>
                <div className='rows__description center'>   
                    <img src="https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/zoom2__ezuczqgu41yu_large_2x.jpg"
                        alt="profil_picture" className='Profil_picture'>
                    
                    </img>
                </div> 
            </div>
            <div className='landing_baseline'>
                <span>{response?.bio}</span>
                <span><span>Curently working in </span>{response?.location}</span>
            </div>
            
        </section>
    );
};

export default Landing;
            
