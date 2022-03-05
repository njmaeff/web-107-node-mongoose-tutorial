/**
 * REST operations for Blog model
 */
import {withMongoose} from "../withMongoose";
import {Blog} from "../models/blog";

export const getByID = withMongoose(async (req, res) => {
    const blog = await Blog.findById(req.params.id).exec()
    if (!blog) {
        return res.status(404).end();
    } else {
        return res.status(200).json({
            data: blog
        });
    }
});

export const getAll = withMongoose(async (req, res) => {
    const allBlogs = await Blog.find().exec()
    return res.status(200).json({
        data: allBlogs
    })
});

export const updateByID = withMongoose(async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body).exec()
    return res.status(204).end()
})

export const create = withMongoose(async (req, res) => {
    const blog = new Blog(req.body)
    await blog.save()
    return res.status(201).json({
        data: blog
    })
});

export const deleteByID = withMongoose(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id).exec()
    return res.status(204).end()
})
