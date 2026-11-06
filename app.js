const customerList = [];

function btnclickme(inputId, listId) {
    let name = document.getElementById(inputId).value;

    let li = document.createElement("li");

    li.textContent = name;

    document.getElementById(listId).appendChild(li);

    document.getElementById(inputId).value = "";
}

function addcustomer() {
    let customerId = document.getElementById("textid").value;
    let customerName = document.getElementById("textName").value;
    let customerAge = document.getElementById("textAge").value;
    let customerAddress = document.getElementById("textAddress").value;
    let customerSalary = document.getElementById("textSalary").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.textContent = customerId;
    td2.textContent = customerName;
    td3.textContent = customerAge;
    td4.textContent = customerAddress;
    td5.textContent = customerSalary;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.getElementById("customerTable").appendChild(tr);
}

function addItem() {
    let itemName = document.getElementById("textItemName").value;
    let itemNumber = document.getElementById("textItemNumber").value;
    let itemPrice = document.getElementById("textItemPrice").value;
    let itemCode = document.getElementById("textItemCode").value;
    let itemWeight = document.getElementById("textItemWeight").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.textContent = itemName;
    td2.textContent = itemNumber;
    td3.textContent = itemPrice;
    td4.textContent = itemCode;
    td5.textContent = itemWeight;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.getElementById("itemTable").appendChild(tr);
}