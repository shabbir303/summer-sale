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
    document.getElementById('discount-price').style.display='inline-block';
    document.getElementById('offer-total').style.display='inline-block';

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

function clickToClear(){
   totalAmount = 0;
   discountAmount =0;
   Total = 0;

  const selectedItemContainer =document.getElementById('selected-items');
  selectedItemContainer.innerHTML = '';
  
  document.getElementById("total-price").innerText = '00';
  document.getElementById('discount-price').style.display='none';
    document.getElementById('offer-total').style.display='none';

    

    const discountButton =document.getElementById('discount-active');
    discountButton.setAttribute('disabled', "true");

    const purchaseButton = document.getElementById('purchase-btn');
    purchaseButton.setAttribute('disabled', 'true');

    const couponCodeInput = document.getElementById('coupon-code');
    couponCodeInput.value ='';
}

function couponClickButton(){
  const couponCodeInput = document.getElementById('coupon-code');
  const couponCode = couponCodeInput.value;
  const discountButton =  document.getElementById('codeButton');
  const discountButtonText = discountButton.innerText;
  discountButtonText = couponCode;
}



