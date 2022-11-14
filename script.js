
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {

  event.preventDefault();
//   localStorage.getItem("input_value",document.getElementById("income_amount_field").value)
  var input=document.getElementById("income_amount_field")
  input.value="";   
  var input1=document.getElementById("date")
  input1.value=""; 
  var input2=document.getElementById("expense_amount_field")
  input2.value="";  
  var input3=document.getElementById("remark_field")
  input3.value="";
    const inputs1 = document.querySelectorAll('#income, #expense,#cash,#bank');
    inputs1.forEach(input => {
      input.checked = false;
    });
  
});

///if state income or expense hide and show 

function incomeFun(){
    if(document.getElementById('income').checked){
    document.getElementById("amount_type").style.display="block";//visible
    document.getElementById("div_expens_catogory").style.display="none";//hide
    document.getElementById("amount_catogory").style.display="block";
    document.getElementById("inc_amt").style.display="block";
    const inputs11 = document.querySelectorAll('#cash,#bank');
    inputs11.forEach(input => {
      input.checked = false;
    });
    }
   else if(document.getElementById('expense').checked){
    document.getElementById("amount_type").style.display="block";
    document.getElementById("div_expens_catogory").style.display="block";
    document.getElementById("amount_catogory").style.display="none";//hide
    document.getElementById("exp_amt").style.display="block";
    document.getElementById("div_expens_catogory").style.display="block"
    document.getElementById("remark_visible").style.display="block"
    const inputs12 = document.querySelectorAll('#cash,#bank');
    inputs12.forEach(input => {
      input.checked = false;
    });
   }

}
// get input value

function GetSelectedTextValue1(input_field) {
        
    // var selectedText = income_catogory.options[income_catogory.selectedIndex].innerHTML;
    var selectedValue = income_catogory.value;
 if(document.getElementById("cash").checked){
    if(selectedValue=="salary"){
       return "Salary"
    }
   else if(selectedValue=="interest"){
    return "Interest"
   }
   else if(selectedValue=="misc"){
    
    return "Misc"
   }
}

else if(document.getElementById("bank").checked){
    if(selectedValue=="salary"){
        return "Salary"
    }
   else if(selectedValue=="interest"){
    return "Interest"
    
   }
   else if(selectedValue=="misc"){
    return "Misc"
    
   }
}

}

function data1(){
  var totalInc = 0;
    if(document.getElementById("cash").checked){
        var amount1=document.getElementById("income_amount_field")
        var tot=0;
        tot=tot+Number(amount1.value)
        var final=parseInt(document.getElementById("total_cash_income").innerText) || 0 
        var cash_income = document.getElementById("total_cash_income").innerText=tot+final;
        totalInc = parseInt(document.getElementById("total_income").innerText) || 0
        document.getElementById("total_income").innerText = cash_income + totalInc;
        }
       else if(document.getElementById("bank").checked){
        var amount2=document.getElementById("income_amount_field");
        var total=0;
        total=total+Number(amount2.value)
        var final1=parseInt(document.getElementById("total_bank_income").innerText) || 0 
        var bank_income = document.getElementById("total_bank_income").innerText=total+final1;
        totalInc = parseInt(document.getElementById("total_income").innerText) || 0
        document.getElementById("total_income").innerText = bank_income + totalInc;
       }
    
    }



// expense section

    function GetSelectedTextValue(expens_catogory) {

     // var selectedText = expens_catogory.options[expens_catogory.selectedIndex].innerHTML;
        var selectedValue1 = expens_catogory.value;
  
           
        if(selectedValue1=="house hold"){
         
            document.getElementById("house_hold").style.display="block";
            const inputs123 = document.querySelectorAll('#bills,#food,#fuel,#health,#shopping');
         
            inputs123.forEach(input => {
      input.style.display="none"
    });
  
 
           }
   
        
       else if(selectedValue1=="bills"){
            document.getElementById("bills").style.display="block"
            const inputs123 = document.querySelectorAll('#house_hold,#food,#fuel,#health,#shopping');
            inputs123.forEach(input => {
              input.style.display="none"
            });
       
        }
       else if(selectedValue1=="food"){
            document.getElementById("food").style.display="block"
            const inputs123 = document.querySelectorAll('#bills,#house_hold,#fuel,#health,#shopping');
            inputs123.forEach(input => {
              input.style.display="none"
            });
        }
        else if(selectedValue1=="fuel"){
            document.getElementById("fuel").style.display="block"
            const inputs123 = document.querySelectorAll('#bills,#food,#house_hold,#health,#shopping');
            inputs123.forEach(input => {
              input.style.display="none"
            });
        }
        else if(selectedValue1=="health"){
            document.getElementById("health").style.display="block"
            const inputs123 = document.querySelectorAll('#bills,#food,#fuel,#house_hold,#shopping');
            inputs123.forEach(input => {
              input.style.display="none"
            });
        }
        else if(selectedValue1=="shopping"){
            document.getElementById("shopping").style.display="block"
            const inputs123 = document.querySelectorAll('#bills,#food,#fuel,#health,#house_hold');
            inputs123.forEach(input => {
              input.style.display="none"
            });
        }
    }

function data(){
  var totalExpense = 0;
    if(document.getElementById("cash").checked){
      var expAmountCash = document.getElementById("expense_amount_field");
      var expTotalCash = 0;
      var expTotalCash =expTotalCash + Number(expAmountCash.value);
      var totalCashExp = parseInt(document.getElementById("total_cash_expense").innerText) || 0;
      var cashExp = document.getElementById("total_cash_expense").innerText =totalCashExp + expTotalCash;
      console.log(cashExp, "Cash Expense");
      totalExpense = parseInt(document.getElementById("total_expense").innerText) || 0
        document.getElementById("total_expense").innerText = cashExp + totalExpense;
        console.log(document.getElementById("total_expense").innerText = cashExp + totalExpense,"totalcashexp")
    }
       else if(document.getElementById("bank").checked){
        var expAmountBank = document.getElementById("expense_amount_field");
      var expTotalBank = 0;
      var expTotalBank =expTotalBank + Number(expAmountBank.value);
      var totalBankExp = parseInt(document.getElementById("total_bank_expense").innerText) || 0;
      var bankExp = document.getElementById("total_bank_expense").innerText =totalBankExp + expTotalBank;
      console.log(bankExp, "Bank Expense");
      totalExpense = parseInt(document.getElementById("total_expense").innerText) || 0
        document.getElementById("total_expense").innerText = bankExp + totalExpense;
        console.log(document.getElementById("total_expense").innerText = bankExp + totalExpense,"totalExpense");
        
       }
    }

    function cashBalance(){
      var cashIncome = parseInt(document.getElementById("total_cash_income").innerText) || 0;
      var cashExpense = parseInt(document.getElementById("total_cash_expense").innerText) || 0;
      console.log(cashExpense, cashIncome, " Cash expense")
      document.getElementById("cash_balance").innerText = cashIncome -  cashExpense;
    }
    function bankBalance(){
      var bankIncome = parseInt(document.getElementById("total_bank_income").innerText) || 0;
      var bankExpense = parseInt(document.getElementById("total_bank_expense").innerText) || 0;
      console.log(bankExpense, bankIncome, " Cash expense")
      document.getElementById("bank_balance").innerText = bankIncome -  bankExpense;
    }





function myfun(){
//     const list1=document.querySelectorAll('#rent, #furniture,#decore,#electronics');
//     const list = document.querySelectorAll('#rent_field, #furniture_field,#decore_field,#electronics_field');
const list1=document.querySelectorAll('#rent, #furniture,#decore,#electronics');
var list2=['rent', 'furniture','decore','electronics']
for (let i = 0; i < list1.length; i++) {
  if(list1[i].checked==true){
    console.log(list2[i])
    return list2[i]
    
   
     }
    //  console.log(restotal)
    //  return restotal
    }
 }

// function myfun1(){
//     const list1=document.querySelectorAll('#electricity, #water,#gas,#houseHelp');
//    
//     for (let i = 0; i < list1  .length; i++) {
//         if(list1[i].checked==true){
// list[i].style.display="block"
//         }
//     }
// }

// function myfun2(){
//     const list1=document.querySelectorAll('#grocery, #eatingoutside');
//     const list = document.querySelectorAll('#grocery_field, #eatingoutside_field');
//     for (let i = 0; i < list.length; i++) {
//         if(list1[i].checked==true){
// list[i].style.display="block"
//         }
//     }
// }
// function myfun3(){
 
//     const list1=document.querySelectorAll('#motorcycle, #car');
//     const list = document.querySelectorAll('#motorcycle_field, #car_field');
//     for (let i = 0; i < list.length; i++) {
//         if(list1[i].checked==true){
// list[i].style.display="block"
//         }
//     }
// }
// function myfun4(){
 
//     const list1=document.querySelectorAll('#sports,#doctor');
//     const list = document.querySelectorAll('#doctor_field,#sports_field');
//     for (let i = 0; i < list.length; i++) {
//         if(list1[i].checked==true){
// list[i].style.display="block"
//         }
//     }
// }

// function myfun5(){
 
//     const list1=document.querySelectorAll('#personal,#gift');
//     const list = document.querySelectorAll('#personal_field,#gift_field');
//     for (let i = 0; i < list.length; i++) {
//         if(list1[i].checked==true){
// list[i].style.display="block"
//         }
//     }
// }
 



function calculations(){
    if(document.getElementById('income').checked){
        data1()
    }
    else if(document.getElementById('expense').checked){
        data()
     
    }
    cashBalance();
    bankBalance();
    table_fun();
    
}

function table_fun(){
    var tbodyEl = document.querySelector("tbody");
    var tableEl = document.querySelector("table");
    var cash_out
    if(document.getElementById('income').checked){
        var inc_rtpe="Income"

    var test1=document.getElementById("date")
    var field_out1=test1.value
     var test=document.getElementById("remark_field")
      var remark_field1 =test.value;
      var test2=document.getElementById("income_amount_field")
      var amount_field2 =test2.value;
    
      if(document.getElementById("cash").checked){
         cash_out="cash"
      }
      else if(document.getElementById("bank").checked)
      {
        cash_out="bank"
      }
    
     
      tbodyEl.innerHTML += `
          <tr>
              <td>${field_out1}</td>
              <td>${inc_rtpe}</td>
              <td>${cash_out}</td>
              <td>${GetSelectedTextValue1()}</td>
              <td>${remark_field1}</td> 
              <td>${amount_field2}</td> 
          </tr>
      `;
    }
   else if(document.getElementById('expense').checked){
    var exp_type="Expense"
   
        var test12=document.getElementById("date")
        var field_out12=test12.value
         var test22=document.getElementById("remark_field")
          var remark1_field12 =test22.value;
          var test221=document.getElementById("expense_amount_field")
          var amount_field22 =test221.value;
          if(document.getElementById("cash").checked){
            cash_out="cash"
         }
         else if(document.getElementById("bank").checked)
         {
           cash_out="bank"
         }
         
          tbodyEl.innerHTML += `
              <tr>
                  <td>${field_out12}</td>
                  <td>${exp_type}</td>
                  <td>${cash_out}</td>
                 
                 <td>${myfun()}</td>
                  <td>${remark1_field12}</td> 
                  <td>${amount_field22}</td> 
              </tr>
          `;
        }
    }
// function typeselection(type){
//     if(type === 0){
//         document.getElementById("category").style.display =block;
//     }
//      else{
//         document.getElementById("expend").style.display =none;
//      }   
//  }
// function expense(){
//     var cash_bal=5000;
//     var bank_bal=100000;
//     event.preventDefault();
//     var type = document.getElementById("type").value;
//     console.log(type);
//     var from =document.getElementById("from").value;
//     console.log(from);
//     var amount= parseInt(document.getElementById("amount").value);
//     var date=document.getElementById("date").value;
//     var remark=document.getElementById("remark").value;
//     // console.log(cash_bal);
//     // console.log(bank_bal);
//     console.log(type);
      
//     // console.log(inctype);
//      console.log(from);
//     // console.log(to);
//     // console.log(amount);
//     // console.log(date);
//     // if(type === "expenditure" ){
//     //     if(to === "bank"){
//     //         var result= bank_bal- amount; 
//     //         console.log(Number(result));
//     //     }
//     //     else{
//     //         var result= cash_bal- amount;
//     //         console.log(Number(result));
//     //     }
        
       
//     // }
//     // else{
//     //     if(to ==="bank"){
//     //         var result= bank_bal + amount; 
//     //          console.log(Number(result));
//     //     }
//     //     else{
//     //         var result= cash_bal + amount;
//     //         console.log(Number(result));
//     //     }
        
        
//      }

    
// // }
// // $ (document).on('ready', function () { 

// //     $("input[type='radio']").on('change', function () {
// //         var el = $(this);
// //         if (el.val() === "income") {
// //             $("#category").append("<option>Salary</option>");
// //             $("#category").append("<option>Interest</option>");
// //             $("#category").append("<option>Misc</option>");
// //         } else if (el.val() === "expenditure") {
// //             $("#category option:last-child").remove();
// //         }
// //     });

// // });
// // $(document).on('ready', function () 
// // {
    
// //     $("input[type='radio']").on('click',function type() {
// //         console.log($(this).val());
// //         if ($(this).val() === "income") {
// //             $("#category").append("<option>Salary</option>");
// //                         $("#category").append("<option>Interest</option>");
// //                      $("#category").append("<option>Misc</option>");
// //         }
// //         else if ($(this).val() === "expenditure") {
// //             $("#category").append("<option>Household</option>");
// //             $("#category").append("<option>Bills</option>");
// //             $("#category").append("<option>Food</option>");
// //             $("#category").append(" <option>Fuel</option>");
// //             $("#category").append("<option>Health</option>");
// //             $("#category").append("<option>Shopping</option>");
// //         }
// //         else{
// //             $("#category").hide();
// //         }
// //      });
// // });



//     //  $( function tag()
//     //  {
//     //      $("input[type='checkbox']").click(function() {
//     //          if ($(this).val() === "income") {
//     //              $("#category").append(<option>Salary</option>);
//     //              $("#category").append(<option>Interest</option>);
//     //              $("#category").append(<option>Misc</option>);
//     //          }
//     //          else if ($(this).val() === "expenditure") {
//     //              $("#category").append(<option>Household</option>);
//     //              $("#category").append(<option>Bills</option>);
//     //              $("#category").append(<option>Food</option>);
//     //              $("#category").append( <option>Fuel</option>);
//     //              $("#category").append(<option>Health</option>);
//     //              $("#category").append(<option>Shopping</option>);
//     //          }
//     //          else{
//     //              $("#category").hide();
//     //          }
//     //       });
//     //       });