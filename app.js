const customerName = [];
 

function btnClick() {
    let txtName = document.getElementById("txtname").value;
    customerName.push(txtName);
    console.log(customerName);
    loadNames();
}

function loadNames() {
    document.getElementById("olCustomer").innerHTML = "";
    for (let cName of customerName) {
        document.getElementById("olCustomer").innerHTML += `<li>${cName}</li>`;

    }

}

// //  document.getElementById("lblCustomerName").innerText=txtName;

// //  document.getElementById("olCustomer").innerHTML+=`<li>${txtName}</li>`;

const itemName = [];

function btnClick() {
    let nameitem = document.getElementById("itemname").value;
    itemName.push(nameitem);
    loadItem();
}

function loadItem() {
    document.getElementById("olItem").innerHTML = "";
    for (let iName of itemName) {
       document.getElementById("olItem").innerHTML += `<li>${iName}</li>`;

    }

}

const customerList = [];

function addCustomer() {

    let customerId = document.getElementById("txtId").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAddress = document.getElementById("txtAddress").value;
    let customerSalary = document.getElementById("txtSalary").value;

    let customer = {
        id: customerId,
        name: customerName,
        age: customerAge,
        address: customerAddress,
        salary: customerSalary
    };

    customerList.push(customer);
    loadCustomerTable();
    console.log(customerList);
}

function loadCustomerTable() {

    let body = `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Salary</th>

            </tr>`

            for(let customer of customerList){

                body += `
                <tr>
                    <td>${customer.id}</td>
                    <td>${customer.name}</td>
                    <td>${customer.age}</td>
                    <td>${customer.address}</td>
                    <td>${customer.salary}</td>
                    
                </tr>
                `

            }
            document.getElementById("tblCustomers").innerHTML = body;

}




