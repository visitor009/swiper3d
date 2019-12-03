# Swiper3d

#### 介绍
移动端旋转木马轮播图

#### 软件架构
css js



#### 使用说明

![效果](https://images.gitee.com/uploads/images/2019/1203/152715_c4215e29_2137661.png)
## 介绍
支持pc、移动端
pc左右箭头控制
移动端左右滑动
## 兼容性
ie >= 10
其他主流浏览器都支持
## 使用文档：
```html
<!-- css -->
<link rel="stylesheet" href="../css/3dSwiper.css">

<!-- html -->
<div class="swiper-container">
	<ul class="swiper-wrap">
      <li><img src=""></li> 
      <li><img src=""></li>
      <li><img src=""></li> 
	</ul>
	<ul class="swiper-dots"></ul>
	<ul class="swiper-navigator">
		<li class="swiper-btn-prev">&lt;</li>
		<li class="swiper-btn-next">&gt;</li>
	</ul>
</div>

<!-- js -->
<script src="../js/3dSwiper.js"></script>
<script>
		new Swiper(".swiper-container",{
			pagination: ".swiper-dots",
			navigator: {
				prev: ".swiper-btn-prev",
				next: ".swiper-btn-next"
			}
		});
</script>
```
## 注意事项：
1. 图片数量要 3+
2. 图片顺序从中间开始，往右排序
3. 图片尺寸会比原来的缩小0.6倍，原来是180px,页面上会变成 `180 * 0.6 = 108px`

[在线预览地址](http://visitor009.gitee.io/specialaffect/html/%E6%97%8B%E8%BD%AC%E6%9C%A8%E9%A9%AC%E8%BD%AE%E6%92%AD%E5%9B%BE.html)

