import {getAllCategories} from "../services/categoryService.js";

export const getAllCategory = (req, res) => {
    const result = getAllCategories();

    result.then((categories) => {
        res.send(categories);
    });
}