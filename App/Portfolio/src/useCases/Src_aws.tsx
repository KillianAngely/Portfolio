class Src_aws {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    async get_src_aws() {
        const response = await fetch(this.url);
        const body = await response.json();
        return body;
    }
}

export default Src_aws;
