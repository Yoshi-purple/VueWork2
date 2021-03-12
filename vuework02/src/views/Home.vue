<template>
<div id="app">
  <div class="worksheet">
    <div class="title">
      <span class="step">STEP1</span>
      <p id="titleText">お客様の情報を入力してください</p>
    </div>
    <div>
      <p class="smallHead">-性別-</p>
      <input type="radio" name="gender" value="男性" @click="selectedMale">男性
      <input type="radio" name="gender" value="女性" @click="selectedFemale">女性
    </div>
    <div id="birthDates">
      <p class="smallHead">-生年月日-</p>
      <select id="yearSelect" @change="selectedYear"><option v-for="year in years" :key="year.id" :value="year.year" >{{ year.year }}{{ year.japanese }}</option></select>年
      <select id="monthSelect"  @change="selectedMonth"><option v-for="month in months" :key="month.id" :value="month.month" >{{ month.month }}</option></select>月
      <select id="dateSelect"  @change="selectedDate"><option v-for="date in dates" :key="date.id" :value="date.date" >{{ date.date }}</option></select>日
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
  
  methods: {
    
    selectedMale(event) {
       this.$store.state.gender = event.target.value
    },
    selectedFemale(event) {
       this.$store.state.gender = event.target.value
    },
    selectedYear(event) {
      this.$store.state.birthDate.year = event.target.value
    },
    selectedMonth(event) {
      this.$store.state.birthDate.month = event.target.value
    },
    selectedDate(event) {
      this.$store.state.birthDate.date = event.target.value
    },
  }
 
}

</script>




<style scoped>
button{
	width: 20%;
	background-color: #71c2a7;
	color:beige;
	border: none;
	text-align: center;
	margin-top: 1rem;
	margin-inline-end: 10px;
	opacity: 0.6;
	padding:5px 0;
}
button:hover{
	cursor: pointer;
	opacity: 1;
}
.step{
	text-align: center;
	font-size: 1px;
	color: #ffffff;
	padding:  2px;
	background-color: rgb(98, 183, 209);
	
}
.worksheet{
 border:1px solid #71c2a7;
 border-radius: 6px;

}
.title{
	border-bottom: 1px solid #71c2a7;
	background-color: #a9ccda;
	
}
#birthDates{
  margin-bottom: 20px;
}
</style>


