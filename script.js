const add = document.body.querySelector('.btn-add ');
const sub = document.body.querySelector('.btn-sub');
const clear =document.body.querySelector('.btn-clear');
const res = document.body.querySelector('.result')

let count = 0
const addFun = () => {
    count ++
    res.innerHTML=count
}

const subFun = () => {
    count --
    res.innerHTML = count
}

const clearFun =()=>{
    res.innerHTML=count-count
}