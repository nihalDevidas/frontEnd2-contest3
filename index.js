

let dataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

async function getServerData(){
    
    try{
        const response = await fetch(dataUrl);
        const cryptoInfo = await response.json();

        console.log(cryptoInfo);
        displayInfo(cryptoInfo);
    }
    catch(error)
    {
       console.log(error);
    }
}


getServerData();


 function displayInfo(cryptoInfo){

    cryptoInfo.forEach((val)=>{

        const cardContainer = document.createElement("div");
        cardContainer.className = "card card-grid";
        cardContainer.id = "card-con";

        const elementdata = `
                        <div class="img-container">

                            <div class="img-con">
                            <img class="coin-img" src=${val.image} alt="bgmi tag">
                            </div>

                            <div class="coin-info">
                                <p class = "crypto-symbol">${val.symbol.toUpperCase()}</p>
                                <p class="crypto-name">${val.name}</p>
                            </div>
                            
                        </div>

                        <button style="background-color:#1c1c1c;" class="${val.price_change_percentage_24h<0?"price-butt":"priceButt"} price-change-btn-grid " id="price-ch-btn">${val.price_change_percentage_24h.toFixed(2)}%</button>

                        <p class="${val.price_change_percentage_24h<0?"current-red":"current-price"}">$${val.current_price.toFixed(2)}</p>

                        <p class="volum"><label>Total Volumn :</label> <span>${val.total_volume}</span></p>
                        <p class="market-cap"><label>Market Cap :</label> <span>$${val.market_cap}<span></p>
                        `;

                cardContainer.innerHTML = elementdata;
                document.getElementById("main-con").appendChild(cardContainer);
    });

    getElements();
 }

 let cardContainers;
 let priceButtons;

 const mainContainer = document.getElementById("main-con"); 

 function getElements(){
    cardContainers = Array.from(document.getElementsByClassName("card")); 
    priceButtons = Array.from(document.getElementsByClassName("priceButt"));
 }
 


 const gridDisplayButton = document.getElementById("gr-btn");
 const listDisplayButton = document.getElementById("li-btn");


 gridDisplayButton.addEventListener('click',()=>{
             
            gridDisplayButton.classList.add("common");
            listDisplayButton.classList.remove("common");
            
             mainContainer.classList.add("main-container-grid");
             mainContainer.classList.remove("main-container-list");
     
             cardContainers.forEach((card)=>{
                   
                card.classList.add("card-grid");
                card.classList.remove("card-list");
             });

             priceButtons.forEach((but)=>{
                but.classList.add("price-change-btn-grid");
                but.classList.remove("price-change-btn-list");
             })

             
                 
 });



 listDisplayButton.addEventListener('click',()=>{

    gridDisplayButton.classList.remove("common");
    listDisplayButton.classList.add("common");
            
    mainContainer.classList.remove("main-container-grid");
    mainContainer.classList.add("main-container-list");

    cardContainers.forEach((card)=>{
          
       card.classList.remove("card-grid");
       card.classList.add("card-list");
    });

    priceButtons.forEach((but)=>{
       but.classList.remove("price-change-btn-grid");
       but.classList.add("price-change-btn-list");
    })

    
        
});

