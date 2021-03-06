<template>
  <div id="app">
    <div class="worksheet">
      <div class="title">
        <span class="step">STEP2</span>
        <p id="title">以下にお答えください</p>
      </div>
      <div>
        <p>現在、生命保険に加入していますか？</p>
        <input type="radio" value="Yes" @click="showQuestion1">はい
        <input type="radio" value="No" @click="showQuestion1">いいえ
      </div>
      <div v-if="isActive">
        <p>現在入院中ですか。または、最近3か月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <input type="radio" value="Yes" @click="showQuestion2">はい
        <input type="radio" value="No" @click="showQuestion2">いいえ
      </div>
      <div v-if="isActive2">
        <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <input type="radio" value="Yes" >はい
        <input type="radio" value="No">いいえ
      </div>

    </div>
    <router-link tag="button" to="/">＜ 前に戻る</router-link> 
    <router-link tag="button" to="/step3">次へ進む ＞</router-link> 
	
  </div>
</template>

<script>
export default {
  data() {
   return {
    isActive:false,
	isActive2:false
	}
},
  methods: {
    showQuestion1() {
	this.isActive = !this.isActive
	},
    showQuestion2() {
	this.isActive2 = !this.isActive2
  }
 }
}
</script>

<style scoped>
/* button{
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
	
} */
</style>
