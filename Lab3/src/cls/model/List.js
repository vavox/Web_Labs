import Item from './Item.js';

export default class List 
{
    constructor() 
    {
        this.items = [];
    }

    _getItemIndex(itemId) 
    {
        return this.items.findIndex( (item) => item.id === itemId); 
    }

    addItem(title) 
    {
        const item = new Item(title);
        this.items.push(item);
    }

    shortItem(itemId) 
    {
        
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
      //var longurl = id;  
        
        const shorturl = "sh0rt.ly/sH" + getrandom();
        const title2 = shorturl;
        const itemIndex = this._getItemIndex(itemId);
        this.items[itemIndex].changeTitle(title2);
    }

    deleteItem(itemId) 
    {
        this.items.splice(this._getItemIndex(itemId), 1);
    }

    editItem(itemId, title) 
    {
        const itemIndex = this._getItemIndex(itemId);
        this.items[itemIndex].changeTitle(title);
    }

    getTitle(itemId) 
    {
        const itemIndex = this._getItemIndex(itemId);
        return this.items[itemIndex].title;
    }

    toggleDone(itemIdList) 
    {
        this.items.map( (item) => 
        {
            if (itemIdList.indexOf(item.id) > -1) item.toggleDone();
        }); 
    }
}