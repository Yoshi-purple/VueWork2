<template>
	<div id="app">
		<div class="worksheet">
			<div class="title">
			<span class="step">STEP3</span>
			<p id="titleText">ご相談内容をご記入ください</p>
			</div>
		<p class="smallHead">-ご相談内容-</p>
		<div>
		<textarea id="textBox" cols="100" rows="20" v-model='message'></textarea>
		</div>
		</div>
		<div class="buttons">
		<router-link  to="/step2" tag="button">＜ 前に戻る</router-link> 
      <router-link to="/step4" tag="button">次へ進む ＞</router-link></div>
	</div>
</template>

<script>

export default {
	computed: {
		message: {
			get() {
				return this.$store.state.message;
			},
			set(value){
				this.$store.dispatch('addMessage',value)
			}
		}
	},
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
#textBox{
	margin-bottom: 20px;
}
</style>