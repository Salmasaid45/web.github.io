let content = document.querySelector("#content");
content = addEventListener("submit",function(){
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    let email = document.querySelector("#email").value;
    let comments = document.querySelector("#comments").value;

    //create objects
    let info = {name:name, address:address, email:email, comments:comments};

    let infos = JSON.parse(localStorage.getItem("infos")) || [];

    infos.push(info);

    //to save the data in localstorage

    localStorage.setItem("infos",JSON.stringify(infos));

    alert("Successfuly");

    content.reset();

})