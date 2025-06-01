export const camelCaseEditor = (str) => {
    let arr = str.split('').map((item,ind)=>{
        if(ind===0) return item;
        if(item.toUpperCase()===item){
            return ' '+item
        }
        else return item;
    })
    return arr.join('');
}