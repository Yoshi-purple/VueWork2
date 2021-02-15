<template>
  <div id="app">
    <div class="worksheet">
	<div class="title">
      <span class="step">STEP2</span>
      <p id="title">以下にお答えください</p>
	</div>
	<div>
		<p>現在、生命保険に加入していますか？</p>
		<input type="radio" value="Yes" @click="click">はい
		<input type="radio" value="No" @click="click">いいえ
	</div>
	<div v-if="show">
		<p>現在入院中ですか。または、最近3か月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
		<input type="radio" value="Yes" @click="click2">はい
		<input type="radio" value="No" @click="click2">いいえ
	</div>
	<div v-if="show2">
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
 export default{
	data: function(){
		return {
			show:false,
			show2:false
		}
	},
	
	methods:{
		click:function(){
			this.show = !this.show
		},
		click2:function(){
			this.show2 = !this.show2
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
