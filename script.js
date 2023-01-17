
// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.

// const getFirstLink = () => {
//     return document.querySelector("a").innerText
// }
// console.log(getFirstLink())


// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.

// const getArr = (newArr) =>{
//     let arr =[]
//     for(let i = 0; i< newArr.length; i++){
//         arr = [...arr, newArr[i].innerText ]
//     }
//     return arr
// }
//     console.dir(getArr(document.querySelectorAll("a")))


// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// const arr = (getArr) =>{
//     let newArr = []
//     for (let i = 0; i< getArr.length; i++){
//         newArr = [...newArr,getArr[i].innerText ]
//     }
//     return newArr
// }
// console.dir(arr(document.querySelectorAll(".nav__link__item")))


// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item

// const arr = (getArr) =>{
//     let newArr = []
//     for(let i = 0; i< getArr.length; i++){
//         newArr = [...newArr, getArr[i].innerText + " class"]
//     }
//    return newArr
// }
// console.dir(arr(document.querySelectorAll(".nav__link__item")))

// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .

// const arr = (getArr) =>{
//     newArr =[]
//     for (let i = 0; i< getArr.length; i++){
//         newArr = [...newArr, getArr[i].dataset.link]
//     }
//     return newArr
// }
// console.log(arr(document.querySelectorAll(".nav__link")))



// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.

/* <a class="nav__link  first" data-link="1">first</a>   */


// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.

/* <a class="nav__link  zero" data-link="0">first</a>  */

// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.

// const getLink =() =>{
//     return document.querySelector("a").innerText
// }
// console.dir(getLink())

// let arr = document.getElementsByTagName("a")
// console.log(arr)


// let newArr = document.querySelectorAll("a")
// console.dir (newArr)
// выводит нод лист которая применяется к array.forEach



// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.

// const getLinks = () =>{

//     let arr =  document.querySelectorAll("a")
//     let newArr = []
//     for (let i = 0; i<arr.length; i++){
//         newArr = [...newArr, arr[i].innerText]
//     }
//     return newArr
// }

// console.log (getLinks());

// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// const getNavLinks = ()=>{
//     let arr = Array.from (document.querySelectorAll(".nav__link__item"))
//     return arr.map ((el)=>{
//         return el.innerText
//     })
    
// }
// console.log(getNavLinks())


// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item

// const getArr = () =>{
//     let arr = Array.from (document.querySelectorAll(".nav__link__item"))
//     return arr.map ((el)=>{
//         return el.className
//     })
// }
// console.log (getArr())

// const getArr = () => {
// let arr = Array.from(document.querySelectorAll(".nav__link"))
// return arr.map((el) => {
//     return el.dataset.link
// })
// }
// console.log(getArr())


// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.


// const getNum = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let str = (el.className.split(" ")[1])
//         let text = el.innerText 
//         if (str === text) {
//             return el.text
//         } else {
//             return el.innerText = str
//         }
//     })
// }
// console.log(getNum())


// getNumber = ()=>{
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el)=>{
//         let str = (el.className.split(" ")[1])
//         let text = el.innerText
//         if (str === text){
//             return el
//         }else{
//             el.innerText = str
//             return el
//         }
//     })
// }
// console.log (getNumber())


// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a> 
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть `${data-link



// const getNum = () => {
//     let arr = Array.from(document.querySelectorAll(".nav__link"))
//     return arr.map((el) => {
//         let str = el.className.split(" ")[1]
//         let text = el.innerText
//         let datalink = el.dataset.link
//         if (str === text) {
//             el.innerText = datalink + el.innerText
//             return el
//         } else {
//             el.innerText = datalink + str
//             return el
//         }
//     })

// }
// console.log(getNum())

// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// yourElementsArray.forEach((element) => {  
  
// })  


// let arr = document.querySelectorAll(".nav__link")
//     arr.forEach((el)=>{
//         let str = el.className.split(" ")[1]
//         let text = el.innerText
//         if(str !== text){
//             el.remove()
//         }
//     })

//     console.log(el.className.split(" ")[1])

// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// const createElement = () =>{
//     let appendDiv = document.querySelector("#append-div")
//     let newElement = document.createElement("div")
//     newElement.id = "#just-text"
//     newElement.innerText = "hello"
//     appendDiv.appendChild(newElement)
//     return appendDiv
// }

// console.log(createElement())


// Task 10Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть айди #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10Используйте:document.createElement(tagName).element.appendChild(element2).и другие...


// const createElement = () =>{
//     let appendDiv = document.querySelector("#append-div")
//     let ul = document.createElement("ul")
//     ul.id = "list"
//     appendDiv.appendChild(ul)
//     for (let i = 1; i <= 10; i++){
//         let li = document.createElement("li")
//         li.innerText = `Child ${i}`
//         ul.appendChild(li)
//     }

// }
// console.log (createElement())

