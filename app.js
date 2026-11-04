

function btnClickMe(){

    let txtName = document.getElementById("txtName").value;

    document.getElementById("lblCustomerName").innerText=txtName;

    document.getElementById("olCustomer").innerHTML+=`<li>${txtName}</li>`




}