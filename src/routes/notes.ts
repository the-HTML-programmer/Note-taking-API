import express, { Request, Response } from "express";
import { NoteModel } from "../models/note-models";

const router = express.Router();

/**
 * @route GET /api/notes
 * @desc Get all notes
 */

router.get("/", async (req: Request, res: Response) => {
    try {
        const notes = await NoteModel.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes" });
    }
});

/**
 * @route GET /api/notes/:id
 * @desc Get a specific note by ID
 */
router.get("/:id", async function (req: Request, res: Response):Promise<any> {
        try {
            const note = await NoteModel.findById(req.params.id);
            if (!note) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.json(note);
        } catch (error) {
            res.status(500).json({ message: "Error fetching the note" });
        }
    });

/**
 * @route POST /api/notes
 * @desc Create a new note
 */
router.post("/", async (req: Request, res: Response):Promise<any> => {
        try {
            const { title, content } = req.body;
            if (!title || !content) {
                return res.status(400).json({ message: "Title and content are required" });
            }

            const newNote = new NoteModel({ title, content });
            await newNote.save();
            res.status(201).json(newNote);
        } catch (error) {
            res.status(500).json({ message: "Error creating the note" });
        }
    });

/**
 * @route DELETE /api/notes/:id
 * @desc Delete a note by ID
 */
router.delete("/:id", async (req: Request, res: Response):Promise<any> => {
    try {
        const deletedNote = await NoteModel.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the note" });
    }
});

export default router;
