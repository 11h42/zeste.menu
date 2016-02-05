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
          "date": "lundi 08 février",
          "entree": "Ballotine au jambon cru et chèvre frais",
          "plat": "Aiguillettes de poulet au curry salade de pâtes",
          "desert": "Brioche façon pain perdu au citron"
        },
        {
          "date": "mardi 09 février",
          "entree": "Tartare de légumes et son crumble au parmesan",
          "plat": "Rôti de porc en cocotte accompagné d'une ratatouille",
          "desert": "Tarte au noix caramel beurre salé"
        },
        {
          "date": "mercredi février",
          "entree": "Salade de perles marines au crabe",
          "plat": "Tarte au chèvre et aux épinards accompagnée d'une petite salade italienne",
          "desert": "Nems banane chocolat"
        },
      ]
    }
  },

  methods: {
  }

}
</script>