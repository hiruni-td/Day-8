const customerList = [];

function btnclickme(inputId, listId) {

    let name = document.getElementById(inputId).value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = name;

    document.getElementById(listId).appendChild(li);

    document.getElementById(inputId).value = "";
}


function addcustomer() {

    let customerId = document.getElementById("textid").value;
    let customerName = document.getElementById("textName").value;
    let customerAge = document.getElementById("textAge").value;
    let customerAddress = document.getElementById("textAddress").value;
    let customerSalary = document.getElementById("textSalary").value;

    if (!customerId || !customerName || !customerAge ||
        !customerAddress || !customerSalary) {

        alert("Please fill all fields");
        return;
    }

    let customer = {
        id: customerId,
        name: customerName,
        age: customerAge,
        address: customerAddress,
        salary: customerSalary
    };

    customerList.push(customer);

    let table = document.getElementById("customerTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = customer.id;
    row.insertCell(1).innerHTML = customer.name;
    row.insertCell(2).innerHTML = customer.age;
    row.insertCell(3).innerHTML = customer.address;
    row.insertCell(4).innerHTML = customer.salary;

    document.getElementById("textid").value = "";
    document.getElementById("textName").value = "";
    document.getElementById("textAge").value = "";
    document.getElementById("textAddress").value = "";
    document.getElementById("textSalary").value = "";

}

function addItem() {
    let itemName = document.getElementById("textItemName").value;
    let itemNumber = document.getElementById("textItemNumber").value;
    let itemPrice = document.getElementById("textItemPrice").value;
    let itemCode = document.getElementById("textItemCode").value;
    let itemWeight = document.getElementById("textItemWeight").value;

    let table = document.getElementById("itemTable");

    let row = table.insertRow();

    row.insertCell(0).textContent = itemName;
    row.insertCell(1).textContent = itemNumber;
    row.insertCell(2).textContent = itemPrice;
    row.insertCell(3).textContent = itemCode;
    row.insertCell(4).textContent = itemWeight;
}