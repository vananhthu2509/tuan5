var men = [
    {
        id:1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC123BA",
        price: "250.000",
        image: "https://toplist.vn/images/800px/ao-thun-trang-129595.jpg"
    },
    {
        id:2,
        name: "Quần baggy den sang trọng QQ",
        code: "TC124BA",
        price: "250.000",
        image: "https://toplist.vn/images/800px/ao-thun-trang-129595.jpg"
    },
    {
        id:3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC125BA",
        price: "250.000",
        image: "https://toplist.vn/images/800px/ao-thun-trang-129595.jpg"
    },
    {
        id:4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC126BA",
        price: "250.000",
        image: "https://toplist.vn/images/800px/ao-thun-trang-129595.jpg"
    },
];
var woment = [
    {
        id:1,
        name: "váy",
        code: "TC123BA",
        price: "250.000",
        image: "https://cdn.gumac.vn/image/01/onpage/bai-38/ao-phong-nu-mot-mau270320191046035408.jpg"
    },
    {
        id:2,
        name: "áo thun phối chân ngắn",
        code: "TC124BA",
        price: "250.000",
        image: "https://cdn.gumac.vn/image/01/onpage/bai-38/ao-phong-nu-mot-mau270320191046035408.jpg"
    },
    {
        id:3,
        name: "áo thun",
        code: "TC125BA",
        price: "250.000",
        image: "https://cdn.gumac.vn/image/01/onpage/bai-38/ao-phong-nu-mot-mau270320191046035408.jpg"
    },
    {
        id:4,
        name: "áo khoác",
        code: "TC126BA",
        price: "250.000",
        image: "https://cdn.gumac.vn/image/01/onpage/bai-38/ao-phong-nu-mot-mau270320191046035408.jpg"
    },
]
function listProducts() {
for (let i= 0; i<=men.length-1; i++) {
    var demo = '<div class="col-3">';
    demo+='<div class="col-3">';
    demo+='<div class="card" style="width:18rem;">'; 
        demo+='<img src="'+men[i].image+'" class="card-img-top" style="height: 400px;" alt="">';
        demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+men[i].name+'</h5>';
            demo+='<p class="card-text">'+men[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
       demo+= '</div>';
   demo+= '</div>';
demo+= '</div>';
console.log(demo);
document.getElementById("men").innerHTML +=demo;
}
for (let i= 0; i<=woment.length-1; i++) {
    var demo = '<div class="col-3">';
    demo+='<div class="col-3">';
    demo+='<div class="card" style="width:18rem;">'; 
        demo+='<img src="'+woment[i].image+'" class="card-img-top" style="height: 400px;" alt="">';
        demo+='<div class="card-body">';
            demo+='<h5 class="card-title">'+woment[i].name+'</h5>';
            demo+='<p class="card-text">'+woment[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
       demo+= '</div>';
   demo+= '</div>';
demo+= '</div>';
console.log(demo);
document.getElementById("woment").innerHTML +=demo;
}

}
function oder(){
    arlert("thank you your order");
}