import { Router } from "express";

const userRouter = Router()

userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get user with ID: ${id}`);
}
)
userRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Update user with ID: ${id}`);
})

export default userRouter;