var tomb = [];
var szelektalt = [];
for (i = 1; i < 21; i++)
{
    var szam = Math.floor(Math.random() * 21 ) + 2;    
    tomb[i] = ({"nev" : "cirmos" + i, "eletkor": szam} );
    if(szam == 2)
    {
        szelektalt = tomb[i];
    }
}

console.log(tomb);
console.log(szelektalt);