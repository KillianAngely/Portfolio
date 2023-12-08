import Src_aws from '../useCases/Src_aws';
import { useState,useEffect } from 'react';

function Experience (){
    const [experience_item,setExperienceitem] = useState<any[]>([])
    useEffect( ()=>{
        const src_aws = new Src_aws("https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Src.json");
        src_aws.get_src_aws().then((data)=>{
            setExperienceitem(data.experiences);
        })
    },[])
 
    return(
        <section>
                <h2>Experience</h2>
                {experience_item.map((experience_info) => (
                    <div key={experience_info.id} className='display_list'>
                        <div className='rows__title'>
                            <h3>{experience_info.name}</h3>
                            <span>
                                {experience_info.startdate} 
                                -
                                {experience_info.enddate}
                            </span>
                        </div>
                        <div className='rows__description'>
                            <h4>{experience_info.position}</h4>
                            <span>{experience_info.contract}</span>
                            <span>{experience_info.location}</span>
                        </div>
                        
                    </div>
                ))}
        </section>
    )
}
export default Experience;
