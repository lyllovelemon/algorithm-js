
let rule1=[
	{ selection1:'姓名',selection2:'不为空'},
	{ selection1:'电话',selection2:'包含',selection3:'180'},
	{selection1:'创建时间',selection2:'早于',selection3: '2019-12-03'}
   ];
let rule2=[
	{ selection1:'姓名',selection2:'不为空'},
	{ selection1:'电话',selection2:'包含',selection3:'180'},
	{selection1:'创建时间',selection2:'早于',selection3: '2019-12-03'}
]
let ruleList=[
   { condition:rule1,manager:['yyy'],staff:[], id: 0 },
	{ condition:rule2,bindPeople:['yyy'],staff:[], id: 1 },
]
// console.log('ruleList------------',ruleList)