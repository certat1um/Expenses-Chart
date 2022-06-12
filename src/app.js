import data from '../data.json' assert {type: 'json'};

const dateFields = document.querySelectorAll('.cart-item span');
const payFields = document.querySelectorAll('.cart-column-desc');
const columns = document.querySelectorAll('.cart-column');

fillData(data)
fillPayings(data)

function fillData(data) {
    let i = 0;
    dateFields.forEach(item => {
        item.innerHTML = data[i].day;
        i++;
    });

    i = 0;
    payFields.forEach(item => {
        item.innerHTML = `$${data[i].amount}`;
        i++;
    });
}

function fillPayings(data) {
    const nums = [];
    data.forEach(item => {
        nums.push(item.amount)
    })
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    columns.forEach(col => {
        if(col.previousElementSibling.innerText == `$${min}`) {
            col.style.height = '20px'
        } else if(col.previousElementSibling.innerText == `$${max}`) {
            col.style.height = '100px'
        } else {
            let height = 
            Math.round(col.previousElementSibling.innerText.slice(1) * 100
            / max);
            col.style.height = `${height}px`
        }
    });
}