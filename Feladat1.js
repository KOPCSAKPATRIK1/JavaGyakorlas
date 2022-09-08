
var szamok = new Array();
for (i = 1; i < 10; i++)
{
    szamok.push(Math.floor(Math.random() * 10));
}

szamok.sort(function(a, b){return b-a});
console.log(szamok);
