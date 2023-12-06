import Bucket_social_list from './assets/bucket.json';
import { useState,useEffect } from 'react';

function Experience (){
    const experience_list = Bucket_social_list.experiences;
    const [experience_item, set_social_links] = useState(experience_list);
    useEffect(() => {
        set_social_links(experience_list);
    }, [experience_list]);

    return(
        <footer>
            <div>
                <h1>Experience</h1>
                {experience_item.map((experience_info) => (
                    <ul>
                        <li>{experience_info.id}</li>
                        <li>{experience_info.name}</li>
                        <li>
                            {experience_info['date-start']} -
                        {experience_info['date-end']}</li>
                        <li>{experience_info.location}</li>
                        <li>{experience_info.position}</li>
                        
                    </ul>
                    
                ))}
            </div>
        </footer>
    )
}
export default Experience;
