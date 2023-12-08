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
                <h2>Experience</h2>
                {experience_item.map((experience_info) => (
                    <div key={experience_info.id} className='cool_list'>
                        <div className='rows_title'>
                            <h3>{experience_info.name}</h3>
                            <span>
                                {experience_info.startdate} 
                                -
                                {experience_info.enddate}
                            </span>
                        </div>
                        <div className='rows_description'>
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
