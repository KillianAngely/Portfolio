import Src_aws from "../useCases/Src_aws";
import { useState,useEffect } from 'react';

function Footer (){
    const [social_link, set_social_links] = useState<any[]>([])
    useEffect(() => {
        const src_aws = new Src_aws();
        src_aws.get_src_aws().then((data) => {
            set_social_links(data.social_links);
        });
        
    },[]);

    return(
        <footer>
            <h2>Footer</h2>
            <ul>
                {social_link.map((social_link) => (
                    <li key={social_link.id}>
                        <a href={social_link.url}>
                            {social_link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
export default Footer;
