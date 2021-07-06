// $(document).ready(function() {
// console.log("Jquery loaded properly");
// });

//Blueprint for adding new task.
function Item(task, status) {
    this.task = task;
    this.status = status;
}

//Use "blueprint" (contrusctor) to create new object.
let item1 = new Item("Clean my room", false);
let item2 = new Item("Mow the Lawn", false);

//method for adding objects created on lines 12 and 13 to overarching object ToDoList().
ToDoList.prototype.addItem = function (item) {
    this.list[item.task] = item.status;
}

//method for removing object
ToDoList.prototype.removeItem = function (item) {
    delete this.list[item.task];
}

ToDoList.prototype.completeTask = function (item) {
    this.list[item.task] = true;
}

//Constructor to add it to the overaching object.
function ToDoList() {
    this.list = {};
}

//Call function to add it to overarching object.
let toDoList1 = new ToDoList();

//Call function to add object to overarching object.
toDoList1.addItem(item1);
toDoList1.addItem(item2);

//display the object
ToDoList.prototype.displayList = function () {
    console.log(this.list);
}

//debug
console.log("first iteration of to-do list");
toDoList1.displayList();

console.log("do stuff:")
toDoList1.removeItem(item1);

console.log("new iteration of to-do")
toDoList1.displayList();

console.log("change status")
toDoList1.completeTask(item2);

console.log("new iteration of to-do")
toDoList1.displayList();
