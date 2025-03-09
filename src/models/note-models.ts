import mongoose, { Schema, Document } from "mongoose";


export interface NoteDocument extends Document{
title : string;
content: string;
dateCreated:Date;
dateUpdated:Date
}


const noteSchema = new Schema<NoteDocument>(
    {
        title:{type: String ,required: true},
        content:{type: String ,required: true},
    },
    {
        timestamps:true
    }
)

export const NoteModel = mongoose.model<NoteDocument>("Note", noteSchema);