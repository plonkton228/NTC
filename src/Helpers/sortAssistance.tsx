export function sortProb (e : Array<string>){
    e.forEach((item,index)=> {
       if(item.includes(' ')){
        let arr = e[index].split('').filter((item)=> item != " ")
         e[index] = arr.join('');
       }
    })
    return e
  }