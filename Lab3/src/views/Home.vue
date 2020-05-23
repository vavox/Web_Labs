<template>
  <div class="home">

    <Table :Litems="$store.state.Litems.items" 
      @deleteItem="deleteItem" @editItem="editItem"/>
    <button @click="add">Add</button>

  </div>
</template>

<script>

import Table from '../components/Table.vue'

export default 
{
  name: 'Home',
  components: { Table },
  data() {
      return {
        
      }
  },

  methods: {
    add() {
      this.$router.push({name:'Add'});
    },
    shortItem(itemId) {
      
      this.$store.dispatch('SHORT', itemId);
    },
    deleteItem(itemId) {
      this.$router.push({name:'Delete', params: {itemId: itemId}});
    },
    editItem(itemId) { 
      this.$router.push({name:'Edit', params: {itemId: itemId}});
    }
  }
}
</script>
