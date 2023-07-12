class gridSquare {
    constructor(id,parent){
        this.id=id;
        this.parent=parent;
        this.createElement();
    }

    createElement(){
        this.element=document.createElement("div");
        this.element.innerHTML=this.id;
        this.element.classList.add("grid-item");
        this.parent.appendChild(this.element);
    }

}