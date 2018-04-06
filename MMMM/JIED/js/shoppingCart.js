/**
 * 购物车模块
 */
//加载侧边栏
$(() => {

	$.ajax({
		type: "get",
		url: "shoppingCart.html"
	}).then(function (html) {
		$(".right_strip").html(html);
	})
});

$(() => {
	//url:product_details.html?lid=1
	$.ajax({
		type: "get",
		url: "data/products/getProductById.php",
		data: location.search.slice(1),
		dataType: "json"
	}).then(data => {
		var {
			product,
			specs,
			pics
		} = data;
		console.log(data)
		//已登录添加购物车
		function loadCart() {
			$.getJSON("data/cart/get.php")
				.then(data => {
					console.log(data)
					var html = "";
					var total = 0;
					for (var item of data) {
						total += item.price * item.count;
						html += `<li class="cart_item">
 				<div class="cart_item_pic">
 				<a href="detailContent.html?lcid=${item.lcid}" onclick="">
 				<img src=${item.pic}></a>
 				</div>
 				<div class="cart_item_desc">
 				<a href="#" onclick="" class="cart_item_name">${item.title}</a>
 				<div class="cart_item_sku">
 				<span>${item.subtitle}</span>
 				</div>
 				<div class="cart_item_price">
 				<span class="cart_price" g-price=${item.price}>¥${item.price}</span><a class="sc2017" title="删除" data-iid=${item.iid}>删除</a>
 				</div>
 				</div>
 				</li>`;
					}
					$(".accounts").html(`<span class="cart_accounts_left">共
										<span class="c_dity">${data.length}</span>件商品
									</span>
									<span class="cart_accounts_right"></span>`);
									// ￥${total.toFixed(2)}
					// $(".cart_accounts_right ").html("¥"+total.toFixed(2));
					cartNum = data.length;
					$(".quantity").html(cartNum);
					$(".cart_content").html(html);
				})
		}
		loadCart();
		//删除商品
		// loadCart();
		//$(".pop_panel").on("click", ".cart_item_price>a", e => {
		//	e.preventDefault();
		//	//if(confirm("是否继续删除?")) {
		//		var $a = $(e.target);
		//		var iid = $a.attr("data-iid");
		//		$.get("data/cart/delete.php", {
		//			iid
		//		}).then(() => {
		//			console.log(1231546)
		//			loadCart();
		//			if(parseInt($(".quantity").html()) - 1 == 0) {
		//				$("#_cart").html(`<a class="emptyCartTime">您的购物车为空，快去购物吧</a>`);
		//				$(".accounts_box").html(" ");
		//				$(".accounts_bom").html(" ");
		//			}
		//		})
		//	//};
		//})

		var nume = $("#number");
		//输入框的值
		var count = parseInt(nume.val());
		//数量选择时加1或减1
		$(".bigImg_lt").on("click", ".fo1 > span,.addi_tion", function () {
			var reg = /^[1-9]{1,}$/;
			var entry = parseInt($("#changePrice_C").html());
			var price = parseFloat($("#goodsPrice").html());
			var total = price * count;
			if (!reg.test(nume.val())) {
				alert('您输入的格式不对');
				console.log(count)
				nume.val(1);
			} else if (count > entry) {
				console.log(count)
				alert('您输入数量大于库存');
				nume.val(entry);
			} else if (count == 0) {
				alert('您输入数量不能为0');
			} else if ($(this).attr('class') == "cutNum" && count > 1) {
				count--;
				nume.val(count);
			} else if ($(this).attr('class') == "addNum" && count < entry) {
				count++;
				nume.val(count);
			}
		})
		
		//////
		var lcid = parseInt($(".addi_tion").attr("data-lid"));
		var title = $(".head_line").text();
		var pic = $("#icon_list").children("ul li:first-child").find("img").attr("data-md");
		var price = $(".priceProduce").text();//.children().find("span.cart_price");
		console.log(price)
		var tataColor = $(".select_color").find("s").attr("data-color");
		var productList = [
		 productObj = {
			lcid: lcid,
			spec: pic,
			title: title,
			price: price,
			subtitle: tataColor
		}];

		//未登录添加购物车
		noLoginCart = function () {
			//  console.log(productObj.spec)
			var htmls = "";
			var total = 0;
			productList.reverse();
			for (let [i, items] of new Map(productList.map((items, i) => [i, items]))) {
				// console.log(i);
				// for(var items of productList) {
				//  console.log(items.indexOf());
				total += parseInt(items.price * items.count);
				
				htmls += `<li class="cart_item">
 				<div class="cart_item_pic">
 				<a href="detailContent.html?lcid=${items.lcid}" onclick="">
 				<img src=${items.spec}></a>
 				</div>
 				<div class="cart_item_desc">
 				<a href="#" onclick="" class="cart_item_name">${items.title}</a>
 				<div class="cart_item_sku">
 				<span>${items.subtitle}</span>
 				</div>
 				<div class="cart_item_price">
 				<span class="cart_price" g-price=${items.price}>¥${items.price}</span><a class="sc2017" title="删除" data-lcid=${i}>删除</a>
 				</div>
 				</div>
 				</li>`;
			};
			$(".accounts").html(`<span class="cart_accounts_left">共
										<span class="c_dity">${productList.length}</span>件商品
									</span>
									<span class="cart_accounts_right">￥${total.toFixed(2)}</span>`);
			 $(".cart_accounts_right ").html("¥"+total.toFixed(2));
			cartNum = data.length;
			//console.log(cartNum)
			$(".quantity").html(cartNum);
			$(".cart_content").html(htmls);

			
		};
		/*$(".ibar_cart_group").on("click", "a.sc2017", function () {
			console.log($(this).attr("data-lcid"));
		})*/
		//noLoginCart();
		//////

		loadCart();
		$(".bigImg_lt").on("click", ".addi_tion", function () {
			$('.lateral_shoot').css("display", "none");
			// console.log("提交");

			//添加购物车曲线运动
			for (var picc of pics) {
				var flyImg = `<img class="u-flyer" src=${picc.sm}>`;
				// var flyImg = $('.u-flyer');
				var flyer = $(flyImg);
				var flyX = $(".trolley_box ").offset().left;
				// var flyY = $(".trolley_box ").offset().top;
				flyer.fly({
					start: {
						left: event.clientX,
						top: event.clientY
					},
					end: {
						left: flyX,
						top: 300,
						width: 50
						// height: 50
					},
					onEnd: function () {
						//$(".u-flyer").destory();
						$(".u-flyer").remove();
					}
				});
			}

			//判断是否登录
			$.get("data/users/isLogin.php").then(data => {
				if (data.ok == 1) {
					//alert("请先登陆");
					//发送添请求
					$.get("data/cart/add.php", {
						lcid,
						count
					}).then(() => {
						loadCart();
					})
				} else {
					// if(productList!==null){

					noLoginCart();
				}
				//保存购物车数据

				localStorage.setItem("ProductLists", JSON.stringify(productList))
				
				console.log(localStorage.getItem("ProductLists"))
				//noLoginCart();

		});
		
		var newProductList = productList.push(productObj);
			productList.concat(newProductList);
			noLoginCart();
		///
		//删除商品
			//var deleteCart = function(){
			/*	noLoginCart();
				$("document").bind("click", "a.sc2017", function () {
			console.log($(this).attr("data-lcid"));
				$(this).parent().parent().parent().remove();	
				
		})*/
		});
			//console.log(productList)
			//取购物车数据
			if(productList!=null){
		var productList = JSON.parse(localStorage.getItem("ProductLists"));
		noLoginCart();
		}
	})
});

(function () {
	//隐藏购物车
	$(".right_strip").on("click", ".trolley_box,.ibar_closebtn", function () {
		//$(".lateral_shoot").css("display","none");
		var myDiv = $('.lateral_shoot').css("display");
		if (myDiv == "none") {
			$('.lateral_shoot').css("right", "40px");
			$(".lateral_shoot").show()
		} else {
			$('.lateral_shoot').css("display", "none");
		}
	})
	$(".ibar_closebtn").click(function () {
		$(".lateral_shoot").css("display", "none");
	})
})();