const getAllUsers = async (req, res) => {
    const db = req.app.locals.db;
    const users = await db.collection('users').find().toArray();
    res.json(users);
};

const createUser = async (req, res) => {
    const db = req.app.locals.db;
    const newUser = req.body;
    const result = await db.collection('users').insertOne(newUser);
    res.status(201).json(result);
};

module.exports = { getAllUsers, createUser };
