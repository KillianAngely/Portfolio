import Src_aws from '../useCases/Src_aws';
import { useState,useEffect } from 'react';

function Experience (){
    const [experience_item,setExperienceitem] = useState<any[]>([])
    useEffect( ()=>{
        const src_aws = new Src_aws();
        src_aws.get_src_aws().then((data)=>{
            setExperienceitem(data.experiences);
        })
    },[])
 
    return(
        <section>
            <div>
                <h2>Experience</h2>
                {experience_item.map((experience_info) => (
                    <ul key={experience_info.id}>
                        <li>{experience_info.name}</li>
                        <li>
                            {experience_info.startdate} 
                            -
                            {experience_info.enddate}
                        </li>
                        <li>{experience_info.position}</li>
                        <li>{experience_info.contract}</li>
                        <li>{experience_info.location}</li>
                    </ul>
                ))}
            </div>
        </section>
    )
}
export default Experience;
