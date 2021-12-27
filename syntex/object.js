var member = ['egoing', 'k8005','hoya'] ;
console.log(member[1]);
var i=0 ;
while(i<member.length){
    console.log('array loop', i,  member[i])
i=i+1
}
var roles={
    'programmer' : 'egoing', 
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer) ;
console.log(roles['programmer']);

for (var name in roles) {
    console.log('object->', name);
    console.log('value->', roles[name]);
}