let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'test-site/images/xidian-xiaohui.jpg') {
        myImage.setAttribute('src', 'test-site/images/1.jpg');
    } else {
        myImage.setAttribute('src', 'test-site/images/xidian-xiaohui.jpg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla ����ˣ�' + name + '��';
}

function setUserName() {
    let myName = prompt('�������������');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;