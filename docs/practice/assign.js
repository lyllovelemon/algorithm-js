// var pwd='',
//    reg=/^[0-9a-zA-Z]{6,12}$/;
// var result=pwd.test(reg);
// console.log('res--->',result);
// var reg=/^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/g;
// var date=/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/;
// var file=/^[a-zA-Z]:\\[^\\:*<>|"?\r\n/]+\\$/
// var Widget={
// 	init:function (width.height) {
// 		this.width=width||50;
// 		this.height=height||50;
// 		this.$elem=null;
// 	},
// 	insert:function($where) {
// 		if(this.$elem){
// 			this.$elem.css({
// 				width:this.width+'px',
// 				height:this.height+'px'
// 			}).appendTo($where);
// 		}
// 	}
// }
// var Button=Object.create(Widget);
// Button.setup=function(width,height,label){
// 	this.init(width,height);
// 	this.label=label||'Default';
//
// 	this.$elem=$('<button>').text(this.label)
// };
// Button.build=function($where){
// 	this.insert($where)
// 	this.$elem.click(this.onclick.bind(this))
// };
// Button.onclick=function(evt){
// 	console.log('Button '+this.label+' clicked!');
// }
// $(document).ready(function(){
// 	var $body=$(document.body);
// 	var btn1=Object.create(Button);
// 	btn1.setup(125,30,"Hello");
//
// 	var btn2=Object.create(Button);
// 	btn2.setup(150,40,'world');
//
// 	btn1.build($body)
// 	bnt2.build($body)
// })
let arr=[[1,2,3]];
let q=[5,6,7,'wake'];
arr[1]=q;
console.log(arr);