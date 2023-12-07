import Src_aws from "../useCases/Src_aws";
import { useState,useEffect } from 'react';

function Education (){
    const [education_item, set_social_links] = useState<any[]>([])
    useEffect(() => {
        const src_aws = new Src_aws();
        src_aws.get_src_aws().then((data) => {
            set_social_links(data.educations);
            
        });
    }, []);

    return(
        <section>
            <div>
                <h2>Education</h2>
                {education_item.map((education_info) => (
                        console.log(education_info),
                    <ul key={education_info.id}>
                        <li>{education_info.name}</li>
                        <li>{education_info.startdate}
                            -
                            {education_info.enddate}</li>
                        <li>{education_info.description}</li>
                        <li>{education_info.location}</li>
                        <li>{education_info.diploma}</li>
                    </ul>
                    
                ))}
            </div>
        </section>
    )
}
export default Education;