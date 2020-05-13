
export default class itemListModel 
{
    constructor() 
    {
        this.items = [];
        this.onChangeCallback = null;
        this.item_id = 0;
    }

    add(item) 
    {
        item.onChangeCallback = this.onChangeCallback;
        this.items.push(item);
        this.item_id++;
    }

    get() 
    {
        
        var item = this.items[0].title1;
        
        return this.item_id;
    }

    

    delete(itemId) 
    {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        this.items.splice(itemIndex, 1);
    }


    shorturl(itemId) 
    {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 

        function getrandom() 
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 5; i++)
            {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        
        const check = this.items[itemIndex].title1;
        const longurl = "https://" + this.items[itemIndex].title1;
        const shorturl = "sh0rt.ly/" + getrandom();
        
        if(!check.startsWith("https://"))
        {
            this.items[itemIndex].title1 = longurl;
        }
        if(this.items[itemIndex].title2 == "")
        {
            this.items[itemIndex].title2 = shorturl;
        }
        
        
    }

    worker_short(id)
    {
        const itemIndex = id;
        function getrandom() 
        {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 5; i++)
            {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        
        const check = this.items[itemIndex].title1;
        const longurl = "https://" + this.items[itemIndex].title1;
        const shorturl = "sh0rt.ly/" + getrandom();
        
        if(!check.startsWith("https://"))
        {
            this.items[itemIndex].title1 = longurl;
        }
        if(this.items[itemIndex].title2 == "")
        {
            this.items[itemIndex].title2 = shorturl;
        }
    }
    update(itemId) 
    {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        const title1 = prompt('Update the link:', '');
        

        if (title1 == "")
        {
            const kurgan = "youtube.com/watch?v=D1iVPaQZD1E";
            this.items[itemIndex].title1 = kurgan;
        }
        else
        {
            this.items[itemIndex].title1 = title1;
        }
        
        this.items[itemIndex].title2 = "";
        
    }

    setOnChangeCallback(onChangeCallback) 
    {
        this.onChangeCallback = onChangeCallback;
    }

}