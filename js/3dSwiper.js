class Swiper {
	constructor(ele, config = {}) {
		var container = document.querySelector(ele),
			p1 = container.querySelectorAll('li')[0],
			p2 = container.querySelectorAll('li')[1],
			p3 = container.querySelectorAll('li')[2],
			p4 = container.querySelectorAll('li')[3],
			p5 = container.querySelectorAll('li')[4],
			p6 = container.querySelectorAll('li')[5],
			lis = container.querySelectorAll('.swiper-wrap  li'),
			bannerWrap = container.querySelector('.swiper-wrap'),
			maxNum = lis.length - 1,
			dots = {},
			timer = 0,
			dotIndex = 0,
			isAddDot = false,
			startP, disX, disY, index;

		if (lis.length < 3 || lis.length > 6) {
			throw ("image need between 3-6 range");
		}
		bannerWrap.classList.add("transition");
		bannerWrap.classList.add(`swiper-${lis.length}`);
		// 设置点
		if (config.pagination) {
			let p = container.querySelector(config.pagination);
			for (let i = 0, len = lis.length; i < len; i++) {
				let li = document.createElement("li");
				p.appendChild(li);
			}
			dots = p.querySelectorAll('li');
			dots[0].className = "active";
		}
		// 图片移动,dire判断是否滑动过		
		function move(dire) {
			var arrCls = []; // 保存类名,用来赋值
			dire = dire || false;
			dotIndex++;

			// 得到所有类名
			for (var i = 0; i < lis.length; i++) {
				arrCls.push(lis[i].className);
			}

			// 循环赋值类名
			for (var i = 0; i < lis.length; i++) {
				if (dire) {
					// 判断左滑
					if (dire < 0) {
						index = i - 1; // 得到最前面元素的上一个, 自己脑补过程
						if (index < 0) {
							index = maxNum;
						}
					} else if (dire > 0) { // 判断右滑
						index = i + 1; // 下一个
						if (index > maxNum) {
							index = 0;
						}
						if (!isAddDot) { // 点导航下一个
							dotIndex -= 2;
							isAddDot = true;
						}
					}
				}

				// 如果没有参数,正常循环
				if (!dire) {
					index = i - 1;
					if (index < 0) {
						index = maxNum;
					}
				}

				lis[i].className = arrCls[index];
			}
			if (dotIndex > maxNum) {
				dotIndex = 0;
			} else if (dotIndex < 0) {
				dotIndex = maxNum;
			}

			isAddDot = false; // 判断是否加过
			setDotActive(dotIndex);

		}
		function setDotActive(index) {
			if (config.pagination) {
				for (var i = 0; i < dots.length; i++) {
					dots[i].className = '';
				}
				dots[index].className = 'active';
			}
		}
		function addTransition() {
			bannerWrap.classList.add('transition');
		}
		function removeTransition() {
			bannerWrap.classList.remove('transition');
		}
		function picTransform(x) {
			var p1 = container.querySelector('.p1'),
				p2 = container.querySelector('.p2'),
				p3 = container.querySelector('.p3'),
				p4 = container.querySelector('.p4'),
				p5 = container.querySelector('.p5'),
				p6 = container.querySelector('.p6');
			var percentV2 = Math.floor(p2.offsetWidth * 0.15), // p2 的百分比转px
				percentV3 = Math.floor(p3.offsetWidth * 0.26); // p3

			if (x < -7) {
				x = -7;
			} else if (x > 12) {
				x = 12
			}
			p1.style.transform = 'translate3d(' + x + 'px,0,100px) scale(.5)';
			p2.style.transform = 'translate3d(' + (percentV2 - x) + 'px,0,90px) scale(.4)';
			switch (lis.length) {
				case 3:
					p3.style.transform = 'translate3d(' + (-percentV2 - x) + 'px,0,90px) scale(.4)';
					break;
				case 4:
					p4.style.transform = 'translate3d(' + (-percentV2 - x) + 'px,0,90px) scale(.4)';
					break;
				case 5:
					p3.style.transform = 'translate3d(' + (percentV3 - (x * 2)) + 'px,0,80px) scale(.3)';
					p4.style.transform = 'translate3d(' + (-percentV3 - (x * 4)) + 'px,0,80px) scale(.3)';
					p5.style.transform = 'translate3d(' + (-percentV2 - (x * 2)) + 'px,0,90px) scale(.4)';
					break;
				case 6:
					p3.style.transform = 'translate3d(' + (percentV3 - (x * 2)) + 'px,0,80px) scale(.3)';
					p4.style.transform = 'translate3d(' + x + 'px,0,80px) scale(.3)';
					p5.style.transform = 'translate3d(' + (-percentV3 - (x * 4)) + 'px,0,80px) scale(.3)';
					p6.style.transform = 'translate3d(' + (-percentV2 - (x * 2)) + 'px,0,90px) scale(.4)';
					break;
			}
		}
		timer = setInterval(move, 2000);

		bannerWrap.addEventListener('touchstart', function (e) {
			removeTransition();
			startP = e.changedTouches[0].clientX;
			clearInterval(timer);
		}, false);
		bannerWrap.addEventListener('touchmove', function (e) {
			var movex = e.changedTouches[0].clientX;
			disX = movex - startP; // 得到滑动的距离

			picTransform(disX / 20); // 让图片缓慢滑动
		}, false);
		bannerWrap.addEventListener('touchend', function (e) {
			addTransition();

			// 清除行内样式，否则类名的样式不生效
			if (p1) { p1.style.cssText = ''; }
			if (p2) { p2.style.cssText = ''; }
			if (p3) { p3.style.cssText = ''; }
			if (p4) { p4.style.cssText = ''; }
			if (p5) { p5.style.cssText = ''; }
			if (p6) { p6.style.cssText = ''; }

			// 防止点击时也会触发
			if (disX) {
				move(disX);
				disX = false;
			}
			timer = setInterval(move, 2000);
		}, false);
	}
}