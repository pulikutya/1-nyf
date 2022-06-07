function listRemoveSpecific(list, item, all = false)
{
	for(let i = 0; i < list.length; i++)
	{
		if(list[i] === item)
		{
			list.splice(i, 1)
			if(!all)
			{
				break;
			}
		}
	}
}
for(let i = 1; i < 6; i++) {document.querySelector(`#a${i}`).onclick = add(i); }
function removeFromSum(jegy, suly)
{

}
sum = [];
function add(n) {
	crn = document.createElement("li");
	suly = document.querySelector("#jegysuly");
	crn.innerText+=`${n}; ${suly} `;
	crn_removebutton = document.createElement("button");
	crn_removebutton.onclick=function() {crn.remove(); removeFromSum(jegy, suly) }
	crn.appendChild(crn_removebutton);


	document.querySelector("#jegyek").appendChild(crn);
}