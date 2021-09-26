let headingElement = document.getElementById("main-heading");
/*console.log(headingElement.innerHTML);*/
// let newHeadingElement = prompt("Введите новый заголовок");
/* if (newHeadingElement != "" & newHeadingElement != null) 
        //{
            /*headingElement.innerHTML = newHeadingElement измение только на JS*/
            /*$("#main-heading").text(newHeadingElement) изменение элемента с помощью jQuery*/
            /* добавил новый элемент с помощью jQuery
            $("body").append("<p>Это новый параграф</p>") 
            */
            /* добавил новый элемент на JS
            newElementBody = document.createElement("p");
            newElementBody.innerHTML = "Это новый параграф";
            document.body.appendChild(newElementBody);               
            */
            /* добавление дочернего элемента в Родительский
            newElementBody = document.createElement("p");
            newElementBody.innerHTML = "Это новый параграф";
            let elementH2 = document.getElementsByTagName("h1");
            for (let singleElement of elementH2)
            {
                console.log(singleElement.innerText);
                newElementBody = document.createElement("p");
                newElementBody.innerHTML = "Это новый параграф";    
                singleElement.appendChild(newElementBody);  
            }
            */
            /*  добавление нового элемента в каждый родительский элемент
            $("h1").append("<p>Это новый элемент, но не новый</p>");
           */
        // }
// newText = prompt("Введите новый заголовок"); 
// i=1;     
// console.log(newText); 
/* нс неудачная попытка добавления элемента на страницу
   разобраться так null не получилось

while (!(newText === null) || i<4)
// for(i = 1; i<=3; i++)
 {
    //console.log(newText);
    let newText = prompt("Введите новый заголовок");
    console.log(newText);
    result = !(newText === null);
    console.log(result);
    $("body").append("<p>" + newText + "</p>");
    i++;
 }
 */
 /* работает
 do {
    let newText = prompt("Введите новый заголовок");
    console.log(newText);
    result = !(newText === null);
    console.log(result);
    $("body").append("<p>" + newText + "</p>");
 } while (!(newText === null) )
 */
result = true;
 while (result)
 {
    let newText = prompt("Введите новый заголовок");
    console.log(newText);
    result = !(newText === null);
    console.log(result);
    if (result) {
        $("body").append("<p>" + newText + "</p>")
        $("p").fadeOut(3000).fadeIn(2000); 
    }   
 }

 
