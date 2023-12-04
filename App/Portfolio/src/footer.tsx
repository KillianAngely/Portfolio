import Bucket_social_list from './assets/bucket.json';
import { useState,useEffect } from 'react';

function footer (){
    const social_list = Bucket_social_list.social_links;
    const [social_link, set_social_links] = useState(social_list);
    useEffect(() => {
        set_social_links(social_list);
    }, [social_list]);

    return(
        <footer>
            <ul>
                {social_link.map((social_link) => (
                    <li>
                        <a href={social_link.url}>
                            <img src={social_link.icon} alt={social_link.name}/>
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
export default footer;
