
 function GetItemsfromBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);    
    let item = '';

    basket.forEach(x => {
        item += `
        <div class="col-lg-12 ado">
        <img src="${x.Image}" alt="">
        <h2>${x.Name}</h2>
        <input type="number" value=${x.Count}>
        <h3> ${x.Price} AZN</h3>
        </div>
        `
    })
    document.getElementById('basket-list').innerHTML = item

}

GetItemsfromBasket();

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    if(basket.length === 0 ) {
        document.getElementById('countt').style.display = 'none'
    }
    else{
        document.getElementById('countt').style.display = 'block'
    }
    document.getElementById('countt').innerHTML = basket.length
}

CountBasket()

function ToplaItem(){
    let toplama = JSON.parse(localStorage.getItem("basket"));
    let toplamQiymet = 0;
    let toplamcount = 0;
    
    let items = " "
    toplama.forEach(a => {
        toplamcount += a.Count;
        let Price = parseFloat(a.Price);
        let fullPrice = a.Count*Price;
        toplamQiymet += fullPrice;
        console.log(toplamQiymet);   
        console.log(toplamcount);   
    })
    items=`
    <div class="basket-box col-lg-8">
    <h1 >Toplam: ${toplamcount} Eded</h1>
    <h1>Toplam Mebleg: ${toplamQiymet} AZN</h1>
    
    </div>
    `
    document.getElementById('clak').innerHTML = items
    
   
    
   
}
ToplaItem()