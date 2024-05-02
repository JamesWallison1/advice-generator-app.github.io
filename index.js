window.addEventListener('DOMContentLoaded', async () => {
    const myData = await getData();
    getAdvice(myData);
});

const rollDice = document.querySelector(".roll-dice");
const orderList = document.querySelector("#advice-iden");
const quoteDisplay = document.querySelector("#advice");

rollDice.addEventListener("click", async ()=>{
    const myData = await getData();
    getAdvice(myData);
})

async function getData(){
    try{
     let response = await fetch("https://api.adviceslip.com/advice");
     let data = await response.json();
     return data;
    }catch(error){
        console.log('Fetch Error: ', error);
    }
}

function getAdvice(adviceInfo){
    orderList.innerText = `Advice #${adviceInfo.slip.id}`
    quoteDisplay.innerText = `${adviceInfo.slip.advice}`
}
