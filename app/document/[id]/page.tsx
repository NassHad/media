import QRCode from "@/lib/models/qrcode.model";
import { connectToDB } from "@/utils/database";
import { notFound, redirect } from "next/navigation";
import { isValidObjectId } from "mongoose";
import { IQRCode } from "@/lib/types/types";

const Page = async ({ params }: { params: { id: string } }) => {
    console.log("Requested ID:", params.id);

    await connectToDB();

    try {
        if (!isValidObjectId(params.id)) {
            console.log("Invalid ObjectId");
            notFound();
        }

        const document = await QRCode.findById<IQRCode>(params.id)
            .lean()
            .exec();

        console.log("Query result:", document);

        if (!document) {
            console.log("Document not found");
            notFound();
        }

        if (!document.redirectionUrl) {
            console.error("Redirection URL is missing");
            notFound();
        }

        console.log("Redirecting to:", document.redirectionUrl);
        redirect(document.redirectionUrl);
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error;
    }
};

export default Page;
