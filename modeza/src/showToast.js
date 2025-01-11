export function showToast(opreation,id){
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if(opreation === "add"){
        toast.textContent= `Product ${id}has been added.`;

    }else{
        toast.textContent= `Product ${id} has been removed`;
    }
    document.body.appendChild(toast);
    setTimeout(()=>{
        toast.remove();

    },2000);
}