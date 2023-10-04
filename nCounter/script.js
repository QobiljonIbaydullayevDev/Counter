const add = document.body.querySelector('.btn-add ');
const sub = document.body.querySelector('.btn-sub');
const res = document.body.querySelector('.result')

let count = 0
const addFun = () => {
    count ++
    console.log(count);
    res.innerHTML=count
}

const subFun = () => {
    count --
    console.log(count);
    res.innerHTML = count
}