/**
 * This is where we define our API
 */
import express from "express"
import * as blogController from "../controllers/blogController"

const router = express.Router();

router.get('/blog/:id', blogController.getByID);
router.get('/blogs', blogController.getAll);

router.post(`/blog`, blogController.create);

router.delete(`/blog/:id`, blogController.deleteByID);

router.put(`/blog/:id`, blogController.updateByID);

export default router
