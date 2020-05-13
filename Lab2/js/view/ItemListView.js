import ItemView from './ItemView.js';

export default class ItemListView 
{
    constructor(itemListModel) 
    {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        this.controllerOnUpdItem = null;
        this.controllerOnShortItem = null;
        
        document.querySelector('#list').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
    }

    setControllerOnAddItem(controllerOnAddItem) 
    {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) 
    {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    setControllerOnUpdItem(controllerOnUpdItem) 
    {
        this.controllerOnUpdItem = controllerOnUpdItem;
    }

    setControllerOnShortItem(controllerOnShortItem) 
    {
        this.controllerOnShortItem = controllerOnShortItem;
    }

    onClick(e) 
    {
        if (e.target.className === 'del-button') 
        {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'update-button') 
        {
            this.controllerOnUpdItem(e.target.dataset.id);
            return;
        }
        if (e.target.className === 'short-button') 
        {
            this.controllerOnShortItem(e.target.dataset.id);
            return;
        }
    }

    onAddItem(e) 
    {
        const title1 = prompt('Enter your link:', '');
        
        this.controllerOnAddItem(title1, '');
    }

    toHtml() 
    {
        const itemsHtml = this.itemListModel.items.map( (item) => 
        {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `<table border="1"><tr><th>Entered link</th><th>Shorted link</th><th>Operation</th></tr>${itemsHtml}</table>`;
    }
}