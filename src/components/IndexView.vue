<template>
  <h1>Menu du 08 au 12 février 2016</h1>
  <div class="news-view">
    <div v-for="item in items">
      <item   :item="item"></item>
    </div>
  </div>
</template>

<script>
  import Item from './Item.vue'

export default {
  components: {
    Item
  },
  name: 'IndexView',

  data () {
    return {
      items: [
        {
          'date': 'lundi 08 février',
          'entree': 'Ballotine',
          'plat': 'Aiguillettes',
          'desert': 'Brioche'
        },
        {
          'date': 'mardi 09 février',
          'entree': 'Tartare',
          'plat': 'Rôti',
          'desert': 'Tarte'
        },
      ]
    }
  },

  methods: {
  }

}
</script>