import Src_aws from "../useCases/Src_aws";
import '../styles/Footer.css';
import { useState,useEffect } from 'react';

function Footer (){
    const Yearnow = new Date().getFullYear();
    const [social_link, set_social_links] = useState<any[]>([])
    useEffect(() => {
        const src_aws = new Src_aws();
        src_aws.get_src_aws().then((data) => {
            set_social_links(data.social_links);
        });
        
    },[]);

    return(
        <footer>
            <div className="footer_inner">
                <p className="label_baseline_footer">© {Yearnow} Portfolio of Killian Angely</p>
                <ul className="social_list">
                    {social_link.map((social_link) => (
                        <li className="social_list_item" key={social_link.id}>
                            <a href={social_link.url}>
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
