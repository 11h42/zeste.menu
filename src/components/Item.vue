<template>
  <div>
    <p class="date">{{item.date}}</p>
    <ul>
      <li>{{item.entree}}</li>
      <li>{{item.plat}}</li>
      <li>{{item.desert}}</li>
    </ul>
    <p>
      <a class="btn btn-primary btn-sm " href="mailto:hello@zeste-et-papilles.fr?subject=Commande pour {{item.date}}&body=Bonjour, je commande Entree + plat + dessert: 12,90€">Entree + plat + dessert: 12,90€</a>
      <a class="btn btn-primary btn-sm " href="mailto:hello@zeste-et-papilles.fr?subject=Commande pour {{item.date}}&body=Bonjour, je commande Entree + plat: 10,90€">Entree + plat: 10,90€</a>
      <a class="btn btn-primary btn-sm " href="mailto:hello@zeste-et-papilles.fr?subject=Commande pour {{item.date}}&body=Bonjour, je commande Plat + dessert: 9,90€">Plat + dessert: 9,90€</a>
    </p>
  </div>


</template>

<script>
export default {

  name: 'Item',

  props: {
    item: Object
  }
}
</script>
<style>
  .date {
    text-decoration: underline;
    font-weight: bold;
  }
</style>