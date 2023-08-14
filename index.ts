import express from 'express';
import userRouter from './src/routes/users';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`the server is running on http://localhost:${PORT}`)
})