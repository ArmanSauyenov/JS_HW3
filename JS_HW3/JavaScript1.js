//Домашнее задание:
//1. Сделать HTML - документ с пустой таблицей с полями product, brand, price, params.
//В JS - коде наполнить таблицу объектами Phone, Computer.
//Так как у каждого типа товара есть свои укикальные свойства,
//    то их добавить в столбец params, в виде списка. (Пример: <ul> <li>Screen size: 14</li> <li>Battery: 1800</li> </ul>)
//        * сами объекты взять из предыдущих задач

//2. К предыдущей задаче, в коде добавить еще одну таблицу(корзина).Дать таблицам разные идентификатора(класс или id).
//Сделать у первой таблицы с товарами еще один столбец(cart),
//    в этом столбце, в каждой строке, вывести кнопку с надписью "add to cart"
//ПО нажатию на кнопку, строка копируется в соседнюю таблицу(корзина).

//3. Сделать во второй таблице(корзина).Столбец удаления товаров.
//Строка с товаром должна просто удалятся из таблицы по нажатию.

//4. Сделать еще один столбец "количество".
//Сделать при копировании одного и того же продукта несколько раз,
//    не дублирование строк, а увеличивание кол - ва.
//При удалении, количество уменьшается, и строка удаляется когда кол - во ровно 0.

var amnt1 = 1;
var amnt2 = 1;

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("t2r1c1").innerText = document.getElementById("t1r1c1").innerText;
    document.getElementById("t2r1c2").innerText = document.getElementById("t1r1c2").innerText;
    document.getElementById("t2r1c3").innerText = document.getElementById("t1r1c3").innerText;
    document.getElementById("t2r1c4").innerText = document.getElementById("t1r1c4").innerText;
    document.getElementById("t2r1c5").innerText = amnt1++;
}, false)

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("t2r2c1").innerText = document.getElementById("t1r2c1").innerText;
    document.getElementById("t2r2c2").innerText = document.getElementById("t1r2c2").innerText;
    document.getElementById("t2r2c3").innerText = document.getElementById("t1r2c3").innerText;
    document.getElementById("t2r2c4").innerText = document.getElementById("t1r2c4").innerText;
    document.getElementById("t2r2c5").innerText = amnt2++;
}, false)

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("t2r1c1").innerText = null;
    document.getElementById("t2r1c2").innerText = null;
    document.getElementById("t2r1c3").innerText = null;
    document.getElementById("t2r1c4").innerText = null;
    document.getElementById("t2r1c5").innerText = null;
}, false)

document.getElementById("btn4").addEventListener("click", function () {
    document.getElementById("t2r2c1").innerText = null;
    document.getElementById("t2r2c2").innerText = null;
    document.getElementById("t2r2c3").innerText = null;
    document.getElementById("t2r2c4").innerText = null;
    document.getElementById("t2r2c5").innerText = null;
}, false)