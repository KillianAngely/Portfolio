import Src_aws from "../useCases/Src_aws";
import { useState,useEffect } from 'react';
import "../styles/Footer.css";

function Footer (){
    const Yearnow = new Date().getFullYear();
    const [social_link, set_social_links] = useState<any[]>([])
    useEffect(() => {
        const src_aws = new Src_aws("https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Src.json");
        src_aws.get_src_aws().then((data) => {
            set_social_links(data.social_links);
        });
        
    },[]);

    return(
        <footer>
            <div className="display_footer">
                <p className="text_light">© {Yearnow} Portfolio of Killian Angely</p>
                <ul className="display_footer_list">
                    {social_link.map((social_link) => (
                        <li key={social_link.id}>
                            <a className="text_light" href={social_link.url}>
                                {social_link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer;
