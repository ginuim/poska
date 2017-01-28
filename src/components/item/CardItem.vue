<template>
  <div class="card-item">
    <div class="card-item-head">
      <img :src="data.cover" alt="">
      <a class="btn btn-modify" href="javascript:;">
        <i class="iconfont icon-modify3"></i>
      </a>
    </div>
    <div class="card-item-body">
      <p class="time">01 / 26/ 2017</p>
      <p class="status">尚未提交印厂</p>
    </div>
    <div class="card-item-foot">
      <a href="javascript:;">下载pdf</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: ['data']
}
</script>

<style>
.card-item-head {
  height: 15rem;
  position: relative;
  overflow: hidden;
}
.card-item-head .btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  line-height: 2.5rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
}
.card-item-head .btn:link,
.card-item-head .btn:visited {
  color: #FFF;
}
.card-item-head .btn:hover {
  background: rgba(0, 0, 0, 0.8);
}
.card-item-head img {
  height: 15rem;
  margin-left: 50%;
  transform: translateX(-50%);
}
.card-item-body {
  height: 5.625rem;
  padding: 1rem 1.5rem 0 1.5rem;
}
.card-item-body p {
  line-height: 2rem;
  text-align: left;
}
.card-item-body .time {
  font-size: 1rem;
}
.card-item-foot {
  margin-top: 1rem;
  padding: 0 1.5rem;
  text-align: left;
}
.card-item-foot a {
  line-height: 2.5rem;
  padding: 0 1.5rem;
  display: inline-block;
  border: #D1D1D1 solid 1px;
}
.card-item-foot a:link,
.card-item-foot a:visited {
  color: #999;
}
.card-item-foot a:hover {
  color: #333;
  border: #999 solid 1px;
}
</style>
