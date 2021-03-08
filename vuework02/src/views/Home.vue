<template>
<div id="app">
  <div class="step1">
    <div class="title">
      <p>step1</p>
      <p>お客様の情報を入力してください</p>
    </div>
    <div>
      <p>-性別-</p>
      <input type="radio">男性
      <input type="radio">女性
    </div>
    <div id="birthDates">
      <p>-生年月日-</p>
      <select id="yearSelect"><option v-for="year in years" :key="year.id">{{ year.year }}{{ year.japanese }}</option></select>年
      <select id="monthSelect"><option v-for="month in months" :key="month.id">{{ month.month }}</option></select>月
      <select id="dateSelect"><option v-for="date in dates" :key="date.id">{{ date.date }}</option></select>日
    </div>
  </div>
  <router-link tag='button' to='/step2'>次へ進む ＞</router-link>  
  </div>
  
</template>
 <script>
 import  { years,months,dates }  from '../helpers/definision.js'


export default {
  data(){
    return {
      years:years,
      months:months,
      dates:dates
    }
  },
 
}

</script>




<style scoped>

</style>


