function newWindow() {
    window.open('./create.html','create_tab','');
}

function createButton() {
    let roomName = document.getElementById('text').value;
    let roomText = document.getElementById('textarea').value;
    location.href = "index.html?roomName="+roomName+"&roomText="+roomText;
}

