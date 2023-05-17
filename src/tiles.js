class TileFormat{
	constructor(text,colour){
	this.text=text;
	this.colour=colour;
	}

	formatTile(tile){
		tile.element.style.color=this.colour;
		tile.textNode.nodeValue=this.text;
	}
}



class Tile{
	constructor(parent,frontFormat,backFormat){
		this.frontFormat=frontFormat;
		this.backFormat=backFormat;
		this.element=document.createElement("div");
		parent.appendChild(this.element);
		this.textNode=document.createTextNode("");
		this.element.appendChild(this.textNode);
		this.frontFormat.formatTile(this);
		this.element.addEventListener("click",this.flip)
	}

	flip(){
		this.backFormat.formatTile(this);
	}
}