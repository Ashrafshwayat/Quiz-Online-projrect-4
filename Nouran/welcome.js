var y = sessionStorage.getItem("username");

console.log(y);

document.getElementById("username").innerHTML = y;



function logout() {

    location.href = "../Batool/project3.html";
   
    sessionStorage.clear();

}
