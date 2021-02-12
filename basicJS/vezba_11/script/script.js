let username = document.getElementById("userName");
let password = document.getElementById("password");
let logInBtn = document.getElementById("logIn");
let registerBtn = document.getElementById("register");
let divLogin = document.getElementById("loginDiv");
let content = document.getElementById("content");
let tableDiv = document.getElementById("table");
let contentGreeting = document.getElementById("contentGreeting");
let contentTableDiv = document.getElementById("contentTable");
let contentAdmin = document.getElementById("contentAdmin");

contentAdmin.style.display = "none";
content.style.display = "none";
//  divLogin.style.display = "none";


let users = [{username: "Goran" , password: "password123" , admin: true} , {username: "Zoran" , password: "password123" , admin: false} , {username: "TheMan" , password: "asdqwe123" , admin: false} , {username: "Admin" , password: "Admin" , admin: true} , {username: "Goran2" , password: "123123123" , admin: false} , {username: "asd" , password: "asd" , admin: true}];

logInBtn.addEventListener(`click` , userLogin);

function userLogin(){
    document.getElementById("msgDiv").innerText = `Incorrect Username or Password`;
    divLogin.style.backgroundColor = "red";
for(let i = 0 ; i < users.length; i++){
    if(username.value === users[i].username && password.value === users[i].password && users[i].admin === true){
        divLogin.style.display = "none";
        contentAdmin.style.display = "block";
        content.style.display = "none";
        document.getElementById("greeting").innerText = `Welcome Back ${users[i].username} `;
        showContentAdmin();
    } if(username.value === users[i].username && password.value === users[i].password && users[i].admin === false){
        divLogin.style.display = "none";
        content.style.display = "block";
        contentAdmin.style.display = "none";
        contentGreeting.innerHTML = `<h1>Hello  ${users[i].username}</h1> `
        showContent();
    }
   
} 
    username.value = "";
    password.value = "";
}


function showContent(){
    content.style.display = "block";
    contentAdmin.style.display = "none";
    divLogin.style.display = "none";
    let tablePrint = "";   
    for(user of users){
        tablePrint = `${tablePrint}  <tr>
        <td> ${user.username} </td> <td> ${user.admin} </td>
        </tr>`
    }
    contentTableDiv.innerHTML = `  <br/><table> <tr> <th colspan=2> Users </th> </tr> <tr> <th> Username </th> <th>Admin Status </th> </tr> ${tablePrint} </table>    <button id="logOut"> Log Out </button>`
    document.getElementById("logOut").addEventListener(`click` , logOut);
    
}
function showContentAdmin(){
    content.style.display = "none";
    contentAdmin.style.display = "block";
    divLogin.style.display = "none";
    let tablePrint = "";   
    for(let i = 0; i < users.length; i++){
        tablePrint = `${tablePrint}  <tr>
        <td> ${users[i].username} </td> <td> ${users[i].admin} </td> <td> <button class="edit" id="edit${i}"  onclick="updateUser(${i})"> Edit </button> </td> <td> <button class="delete" id="delete${i}" onclick="deleteUser(${i})"> Delete </button> </td>
        </tr>`
    }
    tableDiv.innerHTML = `<table> <tr> <th colspan=4> Users </th> </tr> <tr> <th> Username </th> <th>Admin Status </th> </tr> ${tablePrint} </table>    <button id="logOut"> Log Out </button>`
    document.getElementById("logOut").addEventListener(`click` , logOut)
    
}

function deleteUser(who){
    users.splice(who, 1); 
    showContentAdmin();
}


function User(username , password){
    this.username = username,
    this.password = password,
    this.admin = false
}
function registerUser(){
    let createIt = true
    if(username.value !== "" && password.value !== ""){
        for(let i = 0 ; i < users.length ; i++){
            if(users[i].username === username.value){
                createIt = false;
            }
        }
        if(createIt === false){
            document.getElementById("msgDiv").innerText = `Username ${username.value} is already taken`
        divLogin.style.backgroundColor = "darkRed";
        } else{
            let newUser = new User(username.value , password.value)
        users.push({username: newUser.username , password: newUser.password , admin: newUser.admin});
        document.getElementById("msgDiv").innerText = `Succesfully registered user ${username.value}`
        divLogin.style.backgroundColor = "Green";
        }
        
    }
}

registerBtn.addEventListener(`click` , registerUser)

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

function updateUser(who){
   tableDiv.nextElementSibling.innerHTML = `<div id="updateUser" >
   <input type="text" id="editUsername"> <br>
   <input type="text" id="editPassword"> <br>
   <select id="selectAdmin">
        <option value="false">Regular User</option>
        <option value="true">Admin</option>
   </select>

   <button id="editUserBtn">Update</button>
 </div>`;
    document.getElementById("editUsername").value = users[who].username
    document.getElementById("editPassword").value = users[who].password
    document.getElementById("editUserBtn").addEventListener(`click` , function(){
        users[who].username = document.getElementById("editUsername").value
        users[who].password = document.getElementById("editPassword").value
        if(document.getElementById("selectAdmin").value = "true"){
        users[who].admin = true;
        } else {
            users[who].admin = false;
        }
        showContentAdmin();
        tableDiv.nextElementSibling.style.display = "none";
    })
    
}

function logOut(){
    content.style.display = "none";
    contentAdmin.style.display = "none";
    divLogin.style.display = "block";
    divLogin.children = "";
   

}


content.nextElementChild