// lib/types.ts
import mongoose from "mongoose";

export interface IQRCode {
    _id: mongoose.Types.ObjectId;
    name: string;
    isFile: boolean;
    fileName?: string;
    entryUrl: string;
    redirectionUrl: string;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedBy: mongoose.Types.ObjectId;
    updatedAt: Date;
}
