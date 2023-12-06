import Bucket_social_list from './assets/bucket.json';
import { useState,useEffect } from 'react';

function Education (){
    const education_list = Bucket_social_list.educations;
    const [education_item, set_social_links] = useState(education_list);
    useEffect(() => {
        set_social_links(education_list);
    }, [education_list]);

    return(
        <footer>
            <div>
                <h1>Education</h1>
                {education_item.map((education_info) => (
                    <ul>
                        <li>{education_info.name}</li>
                        <li>{education_info['date-start']}-
                        {education_info['date-end']}</li>
                        <li>{education_info.description}</li>
                        <li>{education_info.location}</li>
                    </ul>
                    
                ))}
            </div>
        </footer>
    )
}
export default Education;