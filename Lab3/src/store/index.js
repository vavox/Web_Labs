import Vue from 'vue'
import Vuex from 'vuex'
import List from '@/cls/model/List.js'

Vue.use(Vuex)

export default new Vuex.Store(
  {
  state: 
  {
    Litems: new List()
  },
  mutations: 
  { // cannot be asynchronous! (always sync)
    ADD: (state, lItem) => 
    {
      state.Litems.addItem(lItem);
    },
    SHORT: (state, lItemId) => 
    {
      state.Litems.shortItem([lItemId]);
    },    
    DELETE_ITEM: (state, lItemId) => 
    {
      state.Litems.deleteItem([lItemId]);
    },
    EDIT_ITEM: (state, item) => 
    {
      state.Litems.editItem(item.itemId, item.itemTitle);
    }
  },
  actions: { // can be asynchronous!
    ADD: (context, lItem) => 
    {
      context.commit('ADD', lItem);
    },
    SHORT: (context, lItemId) => 
    {
      context.commit('SHORT', lItemId);
    },
    DELETE_ITEM: (context, lItemId) => 
    {
      context.commit('DELETE_ITEM', lItemId);
    },
    EDIT_ITEM: async (context, item) => 
    { 
      function justWait3Sec() 
      { // waits for 3 seconds and resolves
        return new Promise(resolve => 
          {
          setTimeout(() => 
          {
            resolve();
          }, 3000);
        });
      }
      // it is for test purpose only: to show async operation e.g. waiting 3 seconds before update UI 
      await justWait3Sec(); 
      context.commit('EDIT_ITEM', item);
    }
  },
  modules: {
  }
})
