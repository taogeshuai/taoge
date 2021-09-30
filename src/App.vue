<template>
  <div id="app">
	  <div class="fixs"></div>
	  <div class="flos">
		  <router-link to=""></router-link>
		  <router-link to=""></router-link>
		  <router-view></router-view>
	  </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
	margin: 0 auto;
	width: 980px;
	
}
.fixs{
	position: fixed;
	width: 300px;
	height: 500px;
	background: #2C3E50;
	border-radius: 4px 4px;
}
.flos{
	position: relative;
	width: 600px;
	height: auto;
	margin-left: 380px;
	background: white;
	
}
</style>
