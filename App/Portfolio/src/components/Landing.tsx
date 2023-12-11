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
                    <h2 className='landing_hero_sentence'>{response?.name}</h2>
                    <p className='landing_description text_center'>
                    <p className='landing_description text_center'>
                        Hi, I'm Killian! I'm a passionate software developer with a love for creating innovative and efficient solutions. I have experience in web development, particularly in Python and TypeScript. I enjoy working on challenging projects and collaborating with talented individuals. Let's build something amazing together!
                    </p>
                    </p>
                </div>
                <div className='rows__description center'>   
                    <img src="https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Killian_arm.png"
                        alt="profil_picture" className='Profil_picture'>
                    
                    </img>
                </div> 
            </div>
            <div className='landing_baseline'>
                <p>{response?.bio}</p>
                <p>Curently working in <span>{response?.location}</span></p>
            </div>
            
        </section>
    );
};

export default Landing;
            
