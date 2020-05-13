
onmessage = function(e) 
{
  
  alert(e.data);
  const itemIndex = e.data; 

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
  postMessage(items);
}