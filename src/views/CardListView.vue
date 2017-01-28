<template>
  <div class="cards">
    <ul class="card-list clearfix">
      <li class="card-add">
        <router-link to="/card/add">
          <i class="iconfont icon-plus1"></i>
          <span>新建明信片</span>
        </router-link>
      </li>
      <li v-for="item in list" @click="addCard">
        <card-item :data="item"></card-item>
      </li>
    </ul>
  </div>
</template>

<script>
import CardItem from '../components/item/CardItem'

export default {
  name: 'CardList',
  data: function () {
    return {
      list: []
    }
  },
  mounted: function () {
    this.list = this.$getCardList() // this.$store.getters.getCardList
  },
  components: {
    CardItem
  },
  methods: {
    addCard: function () {
      this.$setCardList([])
      // store.dispatch('setCardList', [])
    }
  },
  watch: {
    '$store.getters.getCardList': {
      handler: function (val, oldVal) {
        this.list = val || []
        console.log(val)
      }
    },
    '$store.getters.getGalleryList': {
      handler: function (val, oldVal) {
        console.log(val)
      }
    }
  }
}
</script>

<style>
.cards {}
.card-list {
  width: auto;
  margin: 0 auto;
  display: table;
}
.card-list li {
  float: left;
  width: 20rem;
  margin-left: 1rem;
  height: 28rem;
  display: block;
  overflow: hidden;
  /*border: #FFF solid 3px;*/
  box-shadow: 0 0 4px rgba(7, 40, 107, 0.2);

  -webkit-transition: all 0.25s ease-out 0s;
  -moz-transition: all 0.25s ease-out 0s;
  transition: all 0.25s ease-out 0s;
}
.card-list li:hover {
  /*border: #5BC6F9 solid 3px;*/
  box-shadow: 0 0 4px rgba(91, 198, 249, 1);
}
.card-list li:first-child {
  margin-left: 0;
}

.card-list li.card-add {
  display: table;
}
.card-list li.card-add a {
  display: block;
  vertical-align: middle;
  display: table-cell;
}
.card-list li.card-add a:link,
.card-list li.card-add a:visited {
  color: #E5E5E5;
}
.card-list li.card-add a:hover {
  color: #999;
}
.card-list li.card-add a .iconfont {
  font-size: 3rem;
}
.card-list li.card-add a span {
  display: block;
  font-size: 1rem;
  line-height: 3rem;
}
</style>
