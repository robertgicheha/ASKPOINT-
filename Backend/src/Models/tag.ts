class TagBody {
    tagid: string;
    tag: string;
    created_at: string;

   
    constructor(tagid: string, tag: string, created_at: string) {
        this.tagid = tagid;
        this.tag = tag;
        this.created_at = created_at;
       
    }
}

 export default TagBody