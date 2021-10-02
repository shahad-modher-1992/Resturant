//// create animation by use setTimeout 

//// هتا مسكت الدف ويلكيم
var welcome = document.getElementById("welcome");
//// هتا عملت فكشن 
function shahad (){
//// هنا حركت الدف ويلكيم من الاعلى
    welcome.style.top = "250" + "px" ;
//// هنا حركت الدف ويلكيم من اليسار
    welcome.style.left = "150" + "px";
//// هنا غيرت الاوبستي للدف ويلكيم

    welcome.style.opacity = '1';
//// هنا تحكمت بمدة الانميشن

    welcome.style.transitionDuration = "3s"
}
//// هتا اسنخدمت سيت انترفل
setTimeout(shahad, 1000);
//// 2هتا مسكت الدف ويلكيم

var welcome2 = document.getElementById("welcome2");
//// هتا عملت فكشن 
function hassan() {
    //// هنا حركت الدف ويلكيم من الاعلى

    welcome2.style.top = "250" + "px";
    ////هنا حركت الدف ويلكيم من  اليمين

    welcome2.style.right = "150" + "px";
    //// هنا تحكمت بمدة الانميشن

    welcome2.style.transitionDuration = "3s"
}
//// هتا اسنخدمت سيت انترفل

setTimeout(hassan, 6000)
//// 3هتا مسكت الدف ويلكيم

var welcome3 = document.getElementById('welcome3');
//// هتا عملت فكشن 

function ayat () {
 //// هنا حركت الدف ويلكيم من الاعلى

welcome3.style.top = "250" + "px";
//// هنا حركت الدف ويلكيم من الاسفل

welcome3.style.bottom = "250" + "px";
//// هنا تحكمت بمدة الانميشن

welcome3.style.transitionDuration = "3s"
}
//// هتا اسنخدمت سيت انترفل

setTimeout(ayat,12000)

////////////////////


////هنا امسك الدف الي اسمه شهد2
let shahad2 = document.getElementById('shahad2');
//// اعمل مصفوفة خاصة بالشي الي ابحث عنه
let allPizza = [];
///هنا اعمل اساينك فكشن
async function getPizza() {
/// هنا اتصلت ب اي بي اي  واجلب كل البياتات الخاصة بالبيتزا
let allresips = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`)
/// هنا احول البيانات الي اجت الى مصفوفة حتى يسهل القراءة 
let allresipsJson= await allresips.json();
///  هنا استدعي فقط الريسبشن من اي بي اي واضعها في مصفوفة البيززا
allPizza = allresipsJson.recipes;
/// هنا طبعتها
console.log(allPizza);
/// استدعاء فكشن العرض

displayallPizza()
}

/// عملت فكشن لعرض مصفوفة البيززا في شهد 2 دف
function displayallPizza() { 
    ///عملت متغير كارتوتة 
    let cartona = " ";
    //// اعمل فورر لووب لان عندي اكثر من عنصر في مصفوفة البيززاا
    for(let i = 0; i < allPizza.length; i++) {
        cartona+= 
        /// هنا راح استخدم بيك تيب حتى اضع كود اج تي ام ايل في الجافا سكربت 
        `
        <div class="col-md-4" id="hi" onclick="getPizzaById(${allPizza[i].recipe_id})">
        <img src='${allPizza[i].image_url}' class="img-fluid">
        <h2> ${allPizza[i].title}</h2>
        <p>${allPizza[i].publisher}</p>
        <a href="${allPizza[i].source_url}">detalies </a>
        </div>
        `
    }
    // هنا اضع الكارتونة في الدف شهد2
    shahad2.innerHTML = cartona;
 }

 ///// هنا اعمل فكشن تعرضلي المصفوفة بيززا عن طريق الاي دي
async function getPizzaById(id) {
    /// هنا اتصلت ب اي بي اي  واجلب كل البياتات الخاصة بال اي دي

let c = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
/// هنا احول البيانات الي اجت الى مصفوفة حتى يسهل القراءة 

let b = await c.json();
//هنا استدعي فقط الريسبشن من اي بي اي واضعها في مصفوفة ال اي دي

let element = b.recipe;
/// هنا طبعتها

console.log(element);
/// اعرض البيانات في دف حمبوسي 

/// اول مرة اضعها في متفير كارتونة 2

let cartona2 = 
`
<img src='${element.image_url}' class="img-fluid">
<h2> ${element.title}</h2>
<p>${element.publisher}</p>
<p>${element.publisher_url}</p>
<p>${element.recipe_id}</p>
<p>${element.social_rank}</p>
<p>${element.publisher}</p>
<a href="${element.source_url}">more info </a>

`
/// مسكت دف حمبوسي عن طريق ال اي دي

let hamboze = document.getElementById('hamboze');
/// اضع الكارتونة في دف حمبوسي

hamboze.innerHTML = cartona2;
  }

  /////////////
 



 ////هتا استدعي الفكشن الاصلية الاولى الي تعمل كل الشغل
getPizza()




















