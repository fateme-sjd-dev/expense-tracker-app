const expenseForm = document.querySelector('.expense-form');
const formInput = document.querySelector('.input');
const expenseName = document.querySelector('.expense-name');
const expenseDate = document.querySelector('.expense-date');
const expenseAmount = document.querySelector('.expense-amount');
const addExpenseBtn = document.querySelector('.add-expense');
const expenseTable = document.querySelector('.expense-table');

let expenseHeaderRow = expenseTable.insertRow(0);
expenseHeaderRow.setAttribute('class','header-row');
let thAmount = expenseHeaderRow.insertCell(0);
let thDate = expenseHeaderRow.insertCell(1);
let thName = expenseHeaderRow.insertCell(2);

thAmount.innerText = '(تومان) مبلغ';
thDate.innerText = 'تاریخ';
thName.innerText = 'عنوان';   

addExpenseBtn.addEventListener('click', function(e){ 
   e.preventDefault();
   let expenseRow = expenseTable.insertRow();
   expenseRow.setAttribute('class','expense-row');

   let tdName = expenseRow.insertCell();
   let tdDate = expenseRow.insertCell();
   let tdAmount = expenseRow.insertCell();
   expenseRow.appendChild(tdAmount);
   expenseRow.appendChild(tdDate);
   expenseRow.appendChild(tdName);
   tdName.appendChild(document.createTextNode(expenseName.value));
   tdDate.appendChild(document.createTextNode(expenseDate.value));
   tdAmount.appendChild(document.createTextNode(expenseAmount.value));

   expenseForm.reset();
});
