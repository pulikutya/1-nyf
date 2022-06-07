function listRemoveSpecific(list, item, all)
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
sum ;
function add(n) {
	crn = document.createElement("div");
	suly = document.querySelector("#jegysuly");
	crn.innerText+=`${n}; ${suly}`;
	crn_removebutton = document.createElement("button");
	crn.crn_removebutton.onclick=function() {crn.remove(); }
	crn.addappendChild(crn_removebutton);

}