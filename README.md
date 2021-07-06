## To-Do List :)
### Using pre tags because no one has time to make pretty READMEs 🤖

<pre>
Describe: Item();
Test: "It will organize items in an object with task and status".
Output: let item1 = new Item("Clean my room", false);
Result: {Clean my room: false, Mow the Lawn: false}
</pre>

<pre>
Describe: ToDoList();
Test: "Constructor to organize objects in a larger "parent" object".
Output: ToDoList.prototype.
Result: ?
</pre>

<pre>
Describe: ToDoList.prototype.addItem = function (item){};
Test: "It will add an object to a parent object in function ToDoList()".
Output: toDoList1.addItem(item1);
Result: {Clean my room: false, Mow the Lawn: false}
</pre>

<pre>
Describe: ToDoList.prototype.removeItem = function (item){};
Test: "It will remove an object from a parent object in function ToDoList()".
Output: toDoList1.removeItem(item1);
Result: Object deleted...
</pre>

<pre>
Describe: ToDoList.prototype.completeTask = function (item){};
Test: "It will change the status of an object to true".
Output: toDoList1.completeTask(item1);
Result: {Clean my room: false, Mow the Lawn: true}
</pre>