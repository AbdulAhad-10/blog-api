import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "createdAt",
      order = "desc",
    } = req.query;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Build sort object
    const sortOrder = order === "asc" ? 1 : -1;
    const sortObj = { [sort]: sortOrder };

    // Get blogs with pagination
    const blogs = await Blog.find({})
      .populate("author", "name email")
      .sort(sortObj)
      .skip(skip)
      .limit(parseInt(limit))
      .select("-__v");

    // Get total count for pagination info
    const totalBlogs = await Blog.countDocuments({});
    const totalPages = Math.ceil(totalBlogs / parseInt(limit));
    const hasNextPage = parseInt(page) < totalPages;
    const hasPrevPage = parseInt(page) > 1;

    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
      data: {
        blogs,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalBlogs,
          hasNextPage,
          hasPrevPage,
          limit: parseInt(limit),
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};
