<template>
  <div class="table">
    <table class="bordered">
      <tr v-if="Litems">
        <th>Entered Link</th>
        <th>Shorted Link</th>
        <th>Operations</th>
      </tr>
      <tr v-for="lItem in Litems" :key="lItem.id">
        <td>{{lItem.title}}</td>
        <td><a v-bind:href="'https://'+lItem.title">{{shortItem(lItem.id)}}</a></td>
        <td>
          <button @click="deleteItem(lItem.id)">Delete</button> &nbsp;
          <button @click="editItem(lItem.id)">Edit</button> &nbsp;
          
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default 
{
  name: 'Table',
  props: 
  {
    Litems: Array
  },
  methods: 
  {
    
    deleteItem(id) 
    {
      this.$emit('deleteItem', id);
    },
    editItem(id) 
    {
      this.$emit('editItem', id);
    },
    shortItem(id) 
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
      var pass = 0;
      if(id)
      {
        pass = id;
      }
      const shorturl = "sh0rt.ly/" + getrandom();
      //this.$emit('shortItem', id);
      if(pass == 0)
      {
        return ''
      }
      else
      {
        return shorturl;
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
