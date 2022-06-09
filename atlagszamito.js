function CheckIfArray(obj)
{
    return obj.constructor.name == "Array";
}
function ArraysEqual(a, b)
{
    if(CheckIfArray(a) && CheckIfArray(b))
    {
        if(a.length === b.length)
        {
            for(let i = 0; i < a.length; i++)
            {
                if(!ArraysEqual(a[i], b[i])) return false;
            }
            return true;
        }
        else return false;
    }
    else return a === b;
}
function listRemoveSpecific(list, item, all = false)
{
	for(let i = 0; i < list.length; i++)
	{
		if(ArraysEqual(list[i], item))
		{
			list.splice(i, 1)
			if(!all) {
				break; }
		}
	}
}
for(let i = 1; i < 6; i++) {document.querySelector(`#a${i}`).onclick = function() {add(i)}; }
function removeFromSum(jegy, suly){listRemoveSpecific(sum, [jegy, suly], false); calcAv();}
const jegyek = document.querySelector("#jegyek");
document.querySelector("#removeallgomb").onclick = function ()
{
	let temp = jegyek.children.length;
	for(let i = 0; i < temp; i++)
	{
		jegyek.children[0].remove();
	}
	sum = [];
	calcAv();
}
var sum = [];
function calcAv()
{
	tsum = 0;
	div = 0;
	for(let i = 0; i < sum.length; i++)
	{
		tsum+=sum[i][0]*sum[i][1]/100;
		div+=sum[i][1]/100;

	}
	document.querySelector("#eredmeny").innerText = tsum / div;
}
var i = 0;
function add(n) {
	i++;
	crn = document.createElement("li");
	let suly = parseInt(document.querySelector("#jegysuly").value);
	crn.innerText+=`${n}; ${suly} `;
	crn_removebutton = document.createElement("button");
	crn_removebutton.innerText = "-";
	let j = i;
	crn.id = `b${j}`;
	crn_removebutton.onclick=function() {
		document.querySelector(`#b${j}`).remove()
		removeFromSum(n, suly) 
	}
	crn.appendChild(crn_removebutton);
	document.querySelector("#jegyek").appendChild(crn);
	sum.push([n, suly])
	calcAv();
}
calcAv();