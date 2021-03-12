<template>
<div id="app">
    <div class="worksheet">
        <div class="title">
        <span class="step">STEP4</span>
        <p id="titleText">以下の内容をご確認ください</p>
        </div>
    <div>
        <span class="smallHead">-性別-</span>
        <p>{{ gender }}</p>
    </div>
    <div>
        <span class="smallHead">-生年月日-</span>
        <p>{{ birthDate.year }}年{{ birthDate.month }}月{{ birthDate.date }}日</p>
    </div>
    <div>
        <span class="smallHead">-現在、生命保険に加入していますか？-</span>
        <p>{{ yesOrNo.no1 }}</p>
    </div>
    <div>
        <span class="smallHead">-現在入院中ですか。または、最近3か月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？-</span>
        <p>{{ yesOrNo.no2 }}</p>

    </div>
    <div>
        <span class="smallHead">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</span>
        <p>{{ yesOrNo.no3 }}</p>

    </div>
    <div>
        <span class="smallHead">-ご相談内容-</span>
        <p>{{ message }}</p>
    </div>
    
    </div>
    <div class="buttons">
    <router-link  to="/step3" tag="button">＜ 前に戻る</router-link> 
    <router-link to="" tag="button">送信 ＞</router-link>
    </div>
</div>
</template>
<script>
export default {
computed: {
    gender() {
        return this.$store.state.gender
    },
    birthDate() {
        return this.$store.state.birthDate
    },
    yesOrNo() {
        return this.$store.state.question
    },
    message() {
        return this.$store.getters.message
    }
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
</style>