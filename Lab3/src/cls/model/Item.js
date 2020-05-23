export default class Item 
{
    constructor(title, title2) 
    {
        this.id = Math.round(Math.random() * 100000).toString();
        this.title = title;
        this.title2 = title2;
        
    }


    changeTitle(title, title2) 
    {
        this.title = title;
        this.title2 = title2;
    }
}