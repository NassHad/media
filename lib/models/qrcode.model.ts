import mongoose from "mongoose";
import { IQRCode } from "@/lib/types/types";

const qrcodeSchema = new mongoose.Schema<IQRCode>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    isFile: {
        type: Boolean,
        required: true,
    },
    fileName: String,
    entryUrl: String,
    redirectionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const QRCode = mongoose.models.QRCode || mongoose.model("QRCode", qrcodeSchema);

export default QRCode;
