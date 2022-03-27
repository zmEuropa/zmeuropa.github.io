window.onload = function(){
    

    let myImage = document.querySelector('img');
    myImage.onclick = function(){
        let mySrc = myImage.getAttribute('src');
        if(mySrc === "../images/wusuopu.jpeg"){
            myImage.setAttribute('src','../images/onepiece.jpg');
        }else{
            myImage.setAttribute('src','../images/wusuopu.jpeg');
        }
    }

    function setHead(str){
        let myHead = document.querySelector('h1');
        myHead.textContent =  "Hello , " + str;
    }

    function setUserName(){
        let myName = prompt("请输入你的名字");
        localStorage.setItem('name',myName);
        setHead(myName);
    }

    let myButton = document.querySelector('button');
    myButton.onclick = setUserName;
    
}