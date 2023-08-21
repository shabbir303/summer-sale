let totalAmount = 0;
let discountAmount =0;
let Total = 0;

function clickItem(target){
   // console.log(target.childNodes[3].childNodes[3].innerText);
  const selectedItemContainer =document.getElementById('selected-items');
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement('li');
  li.innerText = itemName;
//   console.log(li);
  selectedItemContainer.appendChild(li);

//   console.log(target.childNodes[3].childNodes[5].innerText.split(' ')[0])
  const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
  //   let total = 0
  totalAmount = parseFloat(totalAmount) + parseFloat(price);
  document.getElementById("total-price").innerText = totalAmount;

  const discountButton =document.getElementById('discount-active');

  
  if(totalAmount >= 200){
    discountButton.removeAttribute("disabled");
  }
  else{
    discountButton.setAttribute('disabled', "true");
  }


}
 
function applyDiscount(){
  const couponCodeInput = document.getElementById('coupon-code');
  const couponCode = couponCodeInput.value;
  if(couponCode === 'SELL200'){
    document.getElementById('discount-price').style.display='block';
    document.getElementById('offer-total').style.display='block';

    discountAmount = totalAmount * 20/100;
  document.getElementById('discount-price').innerText = discountAmount;

  Total = totalAmount - discountAmount;
  document.getElementById('offer-total').innerText = Total;
  }
  else{
    document.getElementById('discount-price').style.display='hidden';
    document.getElementById('offer-total').style.display='hidden';
  }

  const purchaseButton = document.getElementById('purchase-btn');
  if(Total >=1){
    purchaseButton.removeAttribute('disabled')
  }
  else{
    purchaseButton.setAttribute('disabled', 'true');
  }
}


// const discountButton =document.getElementById('discount-active');
// function updateButton(){
  
//   if(totalAmount >= 200){
//     discountButton.removeAttribute("disabled");
//   }
//   else{
//     discountButton.setAttribute('disabled', "true");
//   }
// }
// updateButton();

    // console.log(typeof totalAmount);
  
  // discountAmount = totalAmount * 20/100;
  // document.getElementById('discount-price').innerText = discountAmount;

  // Total = totalAmount - discountAmount;
  // document.getElementById('offer-total').innerText = Total;
