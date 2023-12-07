class Src_aws {
    url = "https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Src.json";

    async get_src_aws() {
        const response = await fetch('https://portfoliobucket2324.s3.eu-north-1.amazonaws.com/Src.json');
        const body = await response.json();
        return body;
    }

}

export default Src_aws;
