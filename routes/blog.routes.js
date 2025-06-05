import { Router } from 'express';

const blogRouter = Router();

blogRouter.get("/", (req, res) => {
    res.send("Get all blog posts");
})

blogRouter.post("/", (req, res) => {
    res.send("Create a new blog post");
})

blogRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Get blog post with ID: ${id}`);
})

blogRouter.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Update blog post with ID: ${id}`);
})

blogRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Delete blog post with ID: ${id}`);
}
)

export default blogRouter;