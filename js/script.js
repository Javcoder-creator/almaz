


const translations = {

uz: {

nav_services:"Xizmatlar",
nav_portfolio:"Ishlarimiz",
nav_about:"Afzalliklar",
nav_contact:"Kontakt",

hero_title:"Toshkentda beton va g‘isht devorlarni olmosli burg‘alash",
hero_sub:"Beton va g‘isht devorlarni professional burg‘alash",
hero_desc:"Toshkent bo‘ylab tez va sifatli xizmat",

services_title:"Xizmatlarimiz",

service1:"Beton burg‘alash",
service1_desc:"Beton devorlarda professional teshik ochish",

service2:"G‘isht burg‘alash",
service2_desc:"G‘isht devorlarni changsiz burg‘alash",

service3:"Konditsioner teshiklari",
service3_desc:"Konditsioner uchun devor teshish",

service4:"Ventilyatsiya teshiklari",
service4_desc:"Ventilyatsiya tizimlari uchun teshik",

portfolio_title:"Ishlarimiz",

about_title:"Nega biz?",
about1:"Changsiz texnologiya",
about2:"Professional uskunalar",
about3:"Tez xizmat",
about4:"Tajribali ustalar",

contact_title:"Bog‘lanish",
contact_city:"Toshkent shahri"

},

ru:{

nav_services:"Услуги",
nav_portfolio:"Наши работы",
nav_about:"Преимущества",
nav_contact:"Контакты",

hero_title:"Алмазное бурение бетонных и кирпичных стен в Ташкенте",
hero_sub:"Профессиональное алмазное бурение",
hero_desc:"Быстрое и качественное обслуживание по Ташкенту",

services_title:"Наши услуги",

service1:"Бурение бетонных стен",
service1_desc:"Профессиональное бурение бетонных стен",

service2:"Бурение кирпичных стен",
service2_desc:"Аккуратное бурение кирпичных стен",

service3:"Отверстия для кондиционера",
service3_desc:"Бурение отверстий для установки кондиционеров",

service4:"Отверстия для вентиляции",
service4_desc:"Бурение вентиляционных отверстий",

portfolio_title:"Наши работы",

about_title:"Почему мы?",
about1:"Без пыли",
about2:"Профессиональное оборудование",
about3:"Быстрое выполнение",
about4:"Опытные мастера",

contact_title:"Контакты",
contact_city:"Город Ташкент"

}

};

function setLang(lang){

localStorage.setItem("siteLang",lang);

document.querySelectorAll("[data-i18n]").forEach(el=>{
const key=el.getAttribute("data-i18n");
el.textContent=translations[lang][key];
});

}

function loadLang(){

let lang=localStorage.getItem("siteLang");

if(!lang){

const browserLang=navigator.language;

lang=browserLang.startsWith("ru")?"ru":"uz";

}

setLang(lang);

}

document.addEventListener("DOMContentLoaded",loadLang);

console.log("script ishladi");