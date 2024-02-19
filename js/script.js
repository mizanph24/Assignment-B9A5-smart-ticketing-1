document.getElementById("bye-ticket").addEventListener("click", function () {
    // Scroll to the P.H. Paribabahan  section
    document.getElementById("seat-book").scrollIntoView({ behavior: "smooth" });
  });



const allBtn = document.getElementsByClassName("seat-btn");

let seatCount = 0;

let seatLeft = 40;
const ticketPrice = 550;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
     console.log(seatCount)
        if(seatCount > 3){
        alert("complete")
        return 0;
      }
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        btn.disabled = true;
        
        seatCount += 1;
        setInnerText("seat-count", seatCount)

        seatLeft -= 1;
        setInnerText("seat-left", seatLeft)

        const tickeSelect = document.getElementById("ticke-select");

        const seatNumber = e.target.innerText;
        const seatClass = "Economy";
        

        // const div = document.createElement("div");
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
        setInnerText("grand-total", totalPrice)


    })
    

}


// Coupon Start
const apply = document.getElementById("apply-btn");

apply.addEventListener("click", function (e) {

    const couponElement = document.getElementById("coupon").value;

    // const couponCode = couponElement.split(" ").join("").toUpperCase();
 
    const totalTicketPrice = document.getElementById("total-price").innerText;
    const totalTicketPriceNumber = parseInt(totalTicketPrice)
    if (totalTicketPriceNumber == 2200) {

        if (couponElement === "NEW15" ) {
            const grandTotalElement = document.getElementById("grand-total");
            const discount = totalTicketPriceNumber * .15;
            const grandTotal = totalTicketPriceNumber - discount;

            grandTotalElement.innerText = grandTotal.toFixed(2);
            hideElementById("coupon-area")
        }
        else if (couponElement === "Couple 20") {
            const grandTotalElement = document.getElementById("grand-total");
            const discount = totalTicketPriceNumber * .20;
            const grandTotal = totalTicketPriceNumber - discount;
            // console.log(couponCode)
            grandTotalElement.innerText = grandTotal.toFixed(2);
            hideElementById("coupon-area")
        }
        else {
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