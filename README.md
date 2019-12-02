# 3dSwiper

#### 介绍
移动端旋转木马轮播图

#### 软件架构
软件架构说明



#### 使用说明

![效果图](https://images.gitee.com/uploads/images/2019/1202/150445_d2cc6da9_2137661.png)
这是一个在移动平台显示的轮播图，增加手指左右滑动事件
## 使用文档：
```
<!-- css -->
<link rel="stylesheet" href="../css/3dSwiper.css">

<!-- html -->
<div class="swiper-container">
	<ul class="swiper-wrap">
      <li class="p1"><img src=""></li> <!-- class 需要p1 p2随数量递增下去 -->
      <li class="p2"><img src=""></li> <!-- 图片数量只能在3-6之间 -->
      <li class="p3"><img src=""></li> 
	</ul>
	<ul class="swiper-dots">
	</ul>
</div>

<!-- js -->
<script src="../js/3dSwiper.js"></script>
<script>
  		new Swiper(".swiper-container",{
			pagination: ".swiper-dots"
		})
</script>
```
注意事项：
1. 图片数量只能在3-6之间
2. `.swiper-wrap` 下的 li class 需要像 p1 p2随数量递增下去
3. 图片尺寸会比原来的缩小0.6倍，原来是180px,页面上会变成 `180 * 0.6 = 108px`

[在线预览地址](http://visitor009.gitee.io/specialaffect/html/%E6%97%8B%E8%BD%AC%E6%9C%A8%E9%A9%AC%E8%BD%AE%E6%92%AD%E5%9B%BE.html)


#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 码云特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5.  码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
