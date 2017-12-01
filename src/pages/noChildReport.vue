<template>

	<div class="abs-center">
		<p>您未绑定小孩</p>
		<p>将不能查看周阅读报告</p>
	</div>

</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.abs-center{
	color: #fdb883;
	width: 100%;  
	position: absolute;  
	top: 50%; 
	left: 50%;
	transform: translate(-50%,-50%);
	p{
		height:40px;
		line-height: 40px;
	} 
	
}
</style>
