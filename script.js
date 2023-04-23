


function createele(tagname,attname,attvalue,content){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  ele.innerHTML=content;
  return ele;
  
}

function createEle(tagname,attname,attvalue,attname1,attvalue1,attname2,attvalue2){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  ele.setAttribute(attname1,attvalue1);
  ele.setAttribute(attname2,attvalue2)
  return ele;
  
}

function createElediv(tagname,attname,attvalue){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  return ele;
}

function linebreak(tagname){
  let ele=document.createElement(tagname);
  return ele
}
function inputele(tagname,attname,attvalue,attname1,attvalue1){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  ele.setAttribute(attname1,attvalue1);
  return ele;
}

function inputradio(tagname,attname,attvalue,attname1,attvalue1,content){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  ele.setAttribute(attname1,attvalue1);
  ele.innerHTML=content
  return ele;
}
function inputele(tagname,attname,attvalue,attname1,attvalue1,Submit){
  let ele=document.createElement(tagname);
  ele.setAttribute(attname,attvalue);
  ele.setAttribute(attname1,attvalue1);
  ele.innerHTML=Submit;
  return ele;
}

function formEle(tagname,idname,content){
  let frmsub=document.createElement(tagname)
  frmsub.id=idname
  frmsub.innerHTML=content
  return frmsub
}

function radio(tagname,attname,attvalue,attname1,attvalue1,attname2,attvalue2,attname3,attvalue3,attname4,attvalue4){
  let creategenderinput=document.createElement(tagname)
  creategenderinput.setAttribute(attname,attvalue);
  creategenderinput.setAttribute(attname1,attvalue1);
  creategenderinput.setAttribute(attname2,attvalue2);
  creategenderinput.setAttribute(attname3,attvalue3);
  creategenderinput.setAttribute(attname4,attvalue4);
  return creategenderinput
}

function crtTB(TB,table){
  let tble=document.createElement(TB)
 
  tble.className=table
  return tble
}
function tablerow(tagname){
  let ele=document.createElement(tagname);
  return ele
}
function createTH(TH,scopename,content){
  let tble=document.createElement(TH)
  tble.scope=scopename
  tble.innerHTML=content
  return tble
}
function createTd(TD,content){
  let tble=document.createElement(TD)
  tble.innerHTML=content
  return tble
}
var count = 1;
function foo(){
  
  let firstname=document.getElementById("firstname").value
  let lastname=document.getElementById("lastname").value
  let address1=document.getElementById("Address1").value
  let address2=document.getElementById("Address2").value
  let pincode=document.getElementById("pincode").value
  let gender = document.querySelector('input[name="gender"]:checked').value
  let food = document.querySelector('input[name="food"]:checked').value
  let state=document.getElementById("State").value
  let country=document.getElementById("country").value
  let foodlist = "";
  let Food=food.split(" ")
  
  Food.forEach(function(foodies) {
    foodlist += foodies.value + ", ";
  });

  foodlist = foodlist.slice(0, -2);
  

  let  table = document.getElementsByClassName("table")[0];
  let  row = table.insertRow(table.length);
  let countCell = row.insertCell(0);
  let firstnamecell = row.insertCell(1);
  let lastnameCell = row.insertCell(2);
  let address1cell = row.insertCell(3);
  let address2cell = row.insertCell(4);
  let pincodecell = row.insertCell(5);
  let gendercell = row.insertCell(6);
  let foodcell = row.insertCell(7);
  let statecell = row.insertCell(8);
  let countrycell = row.insertCell(9);
  countCell.innerHTML = count;
  firstnamecell.innerHTML = firstname;
  lastnameCell.innerHTML = lastname;
  address1cell.innerHTML = address1;
  address2cell.innerHTML = address2;
  pincodecell.innerHTML = pincode;
  gendercell.innerHTML = gender;
  foodcell.innerHTML = state;
  statecell.innerHTML = country;
  countrycell.innerHTML = food;
  count++;

  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("Address1").value = "";
  document.getElementById("Address2").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("pincode").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
 
  Food.forEach(function(foodies) {
      foodies.checked = false;})
  document.getElementById("State").value = "";
  document.getElementById("country").value = "";
}
// let divcontainer=createElediv("div","class","container")
// document.body.append(divcontainer)
let divrow=createElediv("div","class","row")
document.body.append(divrow)
let Stackedtohorizontalleft=createElediv("div","class","col-sm-3")
let Stackedtohorizontalright=createElediv("div","class","col-sm-9")
divrow.append(Stackedtohorizontalleft,Stackedtohorizontalright)

let createFormElement=linebreak("form")
Stackedtohorizontalleft.append(createFormElement)
let formsub=formEle("div","formsub","Forms submission :")
let formbreak=linebreak("br")
createFormElement.append(formsub,formbreak)

let TemTable=formEle("div","formsub","Temporary Table")
let TemTablebreak=linebreak("br")
Stackedtohorizontalright.append(TemTable,TemTablebreak)

let divfistname=createElediv("div","class","form-group col-md-12")
createFormElement.append(divfistname)
let firstname=createele("label","for","formGroupExampleInput","Firstname")
let namebreak=linebreak("br")
let fistnameinput=createEle("input","type","text","class","form-control","id","firstname")

divfistname.append(firstname,namebreak,fistnameinput)

let divlastname=createElediv("div","class","form-group col-md-12")
createFormElement.append(divlastname)
let lasttname=createele("label","for","lastname","Lastname")
let lastNamebreak=linebreak("br")
let LastNameinput=createEle("input","type","text","class","form-control","id","lastname")
divlastname.append(lasttname,lastNamebreak,LastNameinput)

let divAddress1=createElediv("div","class","form-group col-md-12")
createFormElement.append(divAddress1)
let Address1=createele("label","for","Address1","Address1")
let Addressbreak=linebreak("br")
let Address_1_input=createEle("input","type","text","class","form-control","id","Address1")
divAddress1.append(Address1,Addressbreak,Address_1_input)

let divAddress2=createElediv("div","class","form-group col-md-12")
createFormElement.append(divAddress2)
let Address2=createele("label","for","Address2","Address2")
let Address_2_break=linebreak("br")
let Address_2_input=createEle("input","type","text","class","form-control","id","Address2")
divAddress2.append(Address2,Address_2_break,Address_2_input)

let divpin=createElediv("div","class","form-group col-md-12")
createFormElement.append(divpin)
let pincode=createele("label","for","pincode","Pincode")
let pincodebreak=linebreak("br")
let pincodeInput=createEle("input","type","text","class","form-control","id","pincode")
divpin.append(pincode,pincodebreak,pincodeInput)



let radiotext=createElediv("fieldset","class","form-group  ")
createFormElement.append(radiotext)
let radioElementlegend=createele("legend","class","col-form-label col-sm-12 float-sm-left pt-0","Gender")
radiotext.append(radioElementlegend)
let divradio=createElediv("div","class","col-md-10")
radiotext.append(divradio)
let div1radio=createElediv("div","class","form-check")
divradio.append(div1radio)
let Gender=radio("input","type","radio","id","Male","name","gender","value","Male","class","form-check-input")
let Gendermale=inputradio("label","for","Male","class","form-check-label","Male")
div1radio.append(Gender,Gendermale)
let div2radio=createElediv("div","class","form-check")
divradio.append(div2radio)
let Gender_F=radio("input","type","radio","id","female","name","gender","value","Female","class","form-check-input")
let GenderFemale=inputradio("label","for","female","class","form-check-label","Female")
div2radio.append(Gender_F,GenderFemale)

let divState=createElediv("div","class","form-group col-md-12")
createFormElement.append(divState)
let State=createele("label","for","State","State")
let Statebreak=linebreak("br")
let StateInput=createEle("input","type","text","class","form-control","id","State")
divState.append(State,Statebreak,StateInput)

let divcountry=createElediv("div","class","form-group col-md-12")
createFormElement.append(divcountry)
let country=createele("label","for","country","Country")
let countrybreak=linebreak("br")
let coutryinput=createEle("input","type","text","class","form-control","id","country")
divcountry.append(country,countrybreak,coutryinput)


let wholecheckdiv=createElediv("div","class","form-group col-md-12")
createFormElement.append(wholecheckdiv)
wholecheckdiv.innerHTML="Choose of food:(must choose atleast 2 out of 5 option)"
let div1checkbox=createElediv("div","class","form-check")
wholecheckdiv.append(div1checkbox)
let checkbox1=radio("input","class","form-check-input","type","checkbox","value","NorthIndian","id","northIndian","name","food")
let checkbox1name=inputradio("lable","class","form-check-label","for","northIndian","NorthIndian" )
div1checkbox.append(checkbox1,checkbox1name)
let div2checkbox=createElediv("div","class","form-check")
wholecheckdiv.append(div2checkbox)
let checkbox2=radio("input","class","form-check-input","type","checkbox","value","Southindian","id","southindian","name","food")
let checkbox2name=inputradio("lable","class","form-check-label","for","southindian","Southindian" )
div2checkbox.append(checkbox2,checkbox2name)
let div3checkbox=createElediv("div","class","form-check")
wholecheckdiv.append(div3checkbox)
let checkbox3=radio("input","class","form-check-input","type","checkbox","value","Chinsese","id","chinsese","name","food")
let checkbox3name=inputradio("lable","class","form-check-label","for","chinsese","Chinsese" )
div3checkbox.append(checkbox3,checkbox3name)
let div4checkbox=createElediv("div","class","form-check")
wholecheckdiv.append(div4checkbox)
let checkbox4=radio("input","class","form-check-input","type","checkbox","value","Thailand","id","thailand","name","food")
let checkbox4name=inputradio("lable","class","form-check-label","for","thailand","Thailand" )
div4checkbox.append(checkbox4,checkbox4name)
let div5checkbox=createElediv("div","class","form-check")
wholecheckdiv.append(div5checkbox)
let checkbox5=radio("input","class","form-check-input","type","checkbox","value","Italy","id","italy","name","food")
let checkbox5name=inputradio("lable","class","form-check-label","for","italy","Italy" )
div5checkbox.append(checkbox5,checkbox5name)



let divbutton=createElediv("div","class","form-group_bt col-md-12")
createFormElement.append(divbutton)
// let Button=inputele("button","type","button","onclick","foo()","Submit")
let Button=inputele("button","type","button","class","btn btn-outline-primary","Submit")
Button.addEventListener("click",foo);
divbutton.append(Button)

let Table = crtTB("table","table")
Stackedtohorizontalright.append(Table)
let TableHead=crtTB("thead","table table-striped table-dark")
Table.append(TableHead)
let tableROW=tablerow("tr")
TableHead.append(tableROW)
let tableth_1=createTH("th","col","No")
tableROW.append(tableth_1)
let tableth_2=createTH("th","col","Firstname") 
tableROW.append(tableth_2)
let tableth_3=createTH("th","col","lastanme") 
tableROW.append(tableth_3)
let tableth_4=createTH("th","col","Address1") 
tableROW.append(tableth_4)
let tableth_5=createTH("th","col","Address2") 
tableROW.append(tableth_5)
let tableth_6=createTH("th","col","Pincode") 
tableROW.append(tableth_6)
let tableth_7=createTH("th","col","Gender") 
tableROW.append(tableth_7)
let tableth_8=createTH("th","col","state") 
tableROW.append(tableth_8)
let tableth_9=createTH("th","col","country") 
tableROW.append(tableth_9)
let tableth_10=createTH("th","col","Food") 
tableROW.append(tableth_10)





