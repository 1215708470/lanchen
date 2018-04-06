/*(()=>{
	ajax({
		type:"get",
		url:"data/products/getProductById.php",
		data:location.search.slice(1),
		dataType:"json"
	}).then(data=>{
		console.log(data);
		var product=data.product;
	})
})();*/
(function(){
	//url:product_details.html?lid=1
	$.ajax({
		type:"get",
		url:"data/products/getProductById.php",
		data:location.search.slice(1),
		dataType:"json"
	}).then(data=>{
		console.log(data)
		var {product,specs,pics}=data;


		//console.log(data)
	/*加载大图下的小图*/
			var html="";
		for(var pic of pics){
			html+=`<li class=il><img class="picss" src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`
		}
		var icon_list=document.getElementById("icon_list");
		var LIWIDTH=160,OFFSET=20,moved=0;
		icon_list.style.width=LIWIDTH*pics.length+"px";
		icon_list.innerHTML=html;
	/*添加放大镜*/	
		var mImg=document.getElementById("mImg"),
			lgDiv=document.getElementById("largeDiv"),
			mask=document.getElementById("mask"),
			sMask=document.getElementById("superMask"),
			MSIZE=130, MAX=315;
		mImg.src=pics[0].md;
		lgDiv.style.backgroundImage=`url(${pics[0].lg})`
		icon_list.onmouseover=function(e){
			if(e.target.nodeName==="IMG"){
				var {md,lg}=e.target.dataset;
				mImg.src=md;
				lgDiv.style.backgroundImage=`url(${lg})`;
			}
		}

	//放大镜小图红色框
	$(function(){
    $(".il").mouseover(function(){
       $(this).addClass("repeatImg_cutli").siblings().removeClass("repeatImg_cutli");
    });
	});
		sMask.onmouseover=function(){
			mask.style.display="block";
			lgDiv.style.display="block";
		}
		sMask.onmouseout=function(){
			mask.style.display="none";
			lgDiv.style.display="none";
		}
		sMask.onmousemove=function(e){
			var offsetX=e.offsetX,offsetY=e.offsetY;
			var top=offsetY-MSIZE/2,
				  left=offsetX-MSIZE/2;
		//放大镜边界
			if(top<28) top=28; else if(top>MAX) top=MAX;
			if(left<20) left=20; else if(left>307) left=307; 
			mask.style.top=top+"px";
			mask.style.left=left+"px";
		//放大效果，放大图片大小
			lgDiv.style.backgroundPosition=`${-8/7*left}px ${-12/8*top+28}px`;	
			}
	//加载商品信息
	document.querySelector(".head_line").innerHTML=product.title;
	document.querySelector(".priceProduce").innerHTML=product.price;
	document.querySelector(".marketnum").innerHTML=product.seq_top_sale;
    document.querySelector("#changePrice_C").innerHTML=product.seq_top_sale;

    //加载商品详情
	document.getElementById("content1").innerHTML=product.details;
	    //加载衣服颜色图片
        var html="";
        //如果当前lcid===地址栏lcid则给个class.否则不给 class=${clothing.lcid===product.lcid?"currentColor":""}
        for(var clothing of specs){//
            html+=`
				<a href=detailContent.html?lcid=${clothing.lcid} id="color_box" class=${clothing.lcid===product.lcid?"currentColor":""}>
				<img src=${clothing.spec}>
				<s data-color=${product.subtitle} class=${clothing.lcid===product.lcid?"adj_size":""}></s>
				<input type="radio" name="spec_212" class="colr">
				</a>`;
        }
        document.querySelector(".select_color").innerHTML=html;
   // $(".addtion").html(`<a class='addi_tion' data-lcid=${item.lcid} data-iid=${item.iid}></a>`)
    $(".addtion").html(`<a class='addi_tion' data-lid=${product.lcid}></a>`)
	    //衣服颜色选择
        $(".bigImg_lt").on("click",".priceName_box > a",function (e) {
        e.preventDefault();
        $(this).css("border","2px solid #DF0001").siblings("a").css("border","2px solid #E2E1E3");
        $(this).children("s").addClass("adj_size").parents().siblings().children("s").removeClass("adj_size");
    })
    })
    //window.onload=function()
    //{
    //    // if(parseInt($(".quantity").html())==0){
    //    //     $("#_cart").html(`<a class="emptyCartTime">您的购物车为空，快去购物吧</a>`);
    //    // }else{
    //    //     loadCart();
    //    // }
    //    //alert("你刷新了页面！");
    //    //   var saveNum =  localStorage.getItem("webserver");
    //}
})();
