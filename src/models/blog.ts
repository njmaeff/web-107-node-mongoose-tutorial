/**
 * Blog mongoose model
 */
import {model, Schema} from "mongoose";

/**
 * Mongodb document datatype
 */
export interface BlogType {
    title: string
    author: string
    content: string
}

/**
 * Mongoose schema using the blog datatype. May be used to create a model.
 */
export const schema = new Schema<BlogType>({
    title: String,
    author: String,
    content: String,
})

/**
 * Blog model for creating documents in mongodb
 */
export const Blog = model<BlogType>('Blog', schema)
