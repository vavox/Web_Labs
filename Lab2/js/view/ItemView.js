export default class ItemView 
{
    constructor(itemModel) 
    {
        this.itemModel = itemModel;
    }

    toHtml() 
    {
        return `
            <tr>
                <td style="color: black">
                    ${this.itemModel.title1}
                </td>
                <td style="color: black">
                    ${this.itemModel.title2.link(this.itemModel.title1)}                    
                </td>
                <td>
                    <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                    <button data-id="${this.itemModel.id}" class="update-button">Update</button>
                    <button data-id="${this.itemModel.id}" class="short-button">Short</button>
                </td>
            </tr>`;
    }
}