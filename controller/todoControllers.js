const Todo = require("../models/todoModels");

const getTodos = async (req, res) => {
    // Query to find all todos
    const todos = await Todo.find();
    if (todos) {
        res.status(200).json(todos);
    } else {
        res.status(404).json({
            msg: "NO Todos Found",
        });
    }
};

const addTodo = async (req, res) => {
    // Query to add  todo
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400).json({
            msg: "Please fill all details !",
        });
    }

    const newTodo = await Todo.create({ title, description });
    if (newTodo) {
        res.status(201).json(newTodo);
    } else {
        res.status(400).json({
            msg: "Todo Not created",
        });
    }
};

const getTodo = async (req, res) => {
    // Query to find todo
    const todo = await Todo.findById(req.params.id);
    if (todo) {
        res.status(200).json(todo);
    } 
     else {
        res.status(404).json({
            msg: "NO Todo Found",
        });
    }
};

const updateTodo = async (req, res) => {
    // Query to update  todo
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (updatedTodo) {
        res.status(200).json(updatedTodo);
    } else {
        res.status(400).json({
            msg: "Todo Not Updated",
        });
    }
};

const removeTodo = async (req, res) => {
    // Query to delete  todo
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json({
        msg: "Todo Deleted",
    });
};

module.exports = { getTodo, getTodos, removeTodo, updateTodo, addTodo };
