import ItemListModel from './model/ItemListModel.js';
import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';
import Item from './model/Item.js';


var myWorker = new Worker("js/worker.js");
let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListModel, itemListView, myWorker);

controller.addItem('hltv.org', '');
controller.addItem('liquipedia.net', '');




var btn = document.getElementById("myBtn");


let item;




btn.onclick = function() 
{
  item = controller.getItem();
  
  
  for(var i = 0; i < item; i++)
  {
    controller.workerr(i);
  }
  myWorker.postMessage(item);
  
}


