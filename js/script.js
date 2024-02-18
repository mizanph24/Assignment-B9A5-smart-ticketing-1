
const allBtn = document.getElementsByClassName("seat-btn");

let seatCount = 0;

let seatLeft = 40;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        
        seatCount += 1;
        setInnerText("seat-count", seatCount)

        seatLeft -= 1;
        setInnerText("seat-left", seatLeft)

        const tickeSelect = document.getElementById("ticke-select");

        const seatNumber = e.target.innerText;
        const seatClass = "Economy";
        const ticketPrice = 550;


        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = seatNumber;
        const p2 = document.createElement("p");
        p2.innerText = seatClass;
        const p3 = document.createElement("p");
        // const p33 = p3.classList.add('text-right') 
        p3.innerText = ticketPrice;

        tickeSelect.appendChild(p)
        tickeSelect.appendChild(p2)
        tickeSelect.appendChild(p3)

        let totalPrice = seatCount * ticketPrice;
        setInnerText("total-price", totalPrice)
        
        setBackgroundColorByClassName(seat-btn)
        btn.classList.add('bg-green-400');
        
    });
}

const apply = document.getElementById("apply-btn");

apply.addEventListener("click", function () {

    const couponElement = document.getElementById("coupon").value;

    const couponCode = couponElement.split(" ").join("").toUpperCase();
    
    if (parseInt(totalPrice) == 2200) {
        if(couponCode === "NEW15"){
            const grandTotalElement = document.getElementById("grand-total");
            const discount = totalPrice*.15;
            const grandTotal = totalPrice-discount;
            console.log(couponCode)
            grandTotalElement.innerText = grandTotal.toFixed(2);
        }
        else{
            alert("Invalid Coupon")
        }
    }
    else {
        alert("Please select 4 seats")
    }
})


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}