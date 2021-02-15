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
    <div>
      <p>-生年月日-</p>
      <select name="year">
        <option value="1990">1990(平成2)</option>
        <option value="1991">1991(平成3)</option>
        <option value="1992">1992(平成4)</option>
        <option value="1993">1993(平成5)</option>
        <option value="1994">1994(平成6)</option>
        <option value="1995">1995(平成7)</option>
        <option value="1996">1996(平成8)</option>
        <option value="1997">1997(平成9)</option>
        <option value="1998">1998(平成10)</option>
        <option value="1999">1999(平成11)</option>
        <option value="2000">2000(平成12)</option>
        <option value="2001">2001(平成13)</option>
        <option value="2002">2002(平成14)</option>
        <option value="2003">2003(平成15)</option>
        <option value="2004">2004(平成16)</option>
        <option value="2006">2006(平成17)</option>
        <option value="2007">2007(平成18)</option>
        <option value="2008">2008(平成19)</option>
        <option value="2009">2009(平成20)</option>
        <option value="2010">2010(平成21)</option>
        <option value="2011">2011(平成22)</option>
        <option value="2012">2012(平成23)</option>
        <option value="2013">2013(平成24)</option>
        <option value="2014">2014(平成25)</option>
        <option value="2015">2015(平成26)</option>
        <option value="2016">2016(平成27)</option>
        <option value="2017">2017(平成28)</option>
        <option value="2018">2018(平成29)</option>
        <option value="2019">2019(平成30)</option>
        <option value="2020">2020(令和1)</option>
        <option value="2021">2021(令和2)</option>
        </select>年
        <select name="month">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>月
        <select name="date">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>日
    </div>
  </div>
  <router-link tag='button' to='/step2'>次へ進む ＞</router-link>  
  </div>
  
</template>
<style scoped>

</style>


