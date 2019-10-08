function ShowPost() {
    
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const options = document.getElementsByName('check_list[]');

    if (title === "" || message === "") {
        return false;
    }

    //Create tags
    const div = document.createElement("DIV");
    div.setAttribute("class", "box row");
    const list = document.createElement("UL");
    div.setAttribute("id", "list");

    //render title message and ul tag
    div.innerHTML = "<h3>" + title + "</h3><p>" + message + "</p>";
    div.appendChild(list);

    //checkboxes
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            const node = document.createElement("LI");                 // Create a <li> node
            const textnode = document.createTextNode(options[i].value);// Create a text node
            node.appendChild(textnode);                         // Append the text to <li>
            list.appendChild(node);
        }
    }
    //render div into the cotainer
    document.getElementsByClassName("container")[0].appendChild(div);
}

function RemoveAllListItems(list) {
    //list = ul or ol DOM Element 
    while (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
}

function OlaFunction() {
    if (ola.checked == true) {
        document.getElementById("dromos").checked = true;
        document.getElementById("nero").checked = true;
        document.getElementById("reuma").checked = true;
        document.getElementById("skoupidia").checked = true;
        document.getElementById("hxorupansh").checked = true;
        document.getElementById("allo").checked = true;



    }
    else {
        document.getElementById("dromos").checked = false;
        document.getElementById("nero").checked = false;
        document.getElementById("reuma").checked = false;
        document.getElementById("skoupidia").checked = false;
        document.getElementById("hxorupansh").checked = false;
        document.getElementById("allo").checked = false;
    }
}

function myFunction() {
    const x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
