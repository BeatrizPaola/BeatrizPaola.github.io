jQuery("document").ready(function($){
var menuBTn = $(".menu-icon"),
	menu=$(".navigation");
menuBTn.click(function(){
	if (menu.hasClass("show")){
		menu.removeClass("show");
	} else{
		menu.addClass("show");
	}
});
});
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("currentdate").textContent = fulldate;

if (dayName == "Friday") {
	var banner = document.createElement("div");
	banner.className = "b";
	banner.innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "x-large";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.padding = "10px 10px 10px 10px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "#f5cf87";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.zIndex = "3";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.position ="fixed";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.top = "0";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.left = "0";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.right = "0";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.margin = "0 auto";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.maxWidth = "1000px";
}

