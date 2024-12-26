import ConnectDB from "@/lib/ConnectDB";
import { UserModel } from "@/lib/model/Usermodal";

export async function POST(req) {
    await ConnectDB();
    try {
        const obj = await req.json();

        let newUser = await new UserModel({ ...obj });
        newUser = await newUser.save();

        return Response.json(
            {
                error: false,
                msg: "user register sucessfully",
                user: newUser,
            },
            { status: 201 },
        );
    } catch (e) {
        return Response.json(
            {
                error: true,
                msg: "something went wrong",
            },
            { status: 400 },
        );
    }
}


export async function GET(req) {
    try {
        // Connect to the database
        await ConnectDB();

        // Fetch all users
        const users = await UserModel.find();

        // Return the successful response
        return Response.json(
            {
                error: false,
                msg: "Users fetched successfully",
                users: users,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching users:", error); // Log error for debugging

        // Return the error response
        return Response.json(
            {
                error: true,
                msg: "Something went wrong while fetching users",
            },
            { status: 500 }
        );
    }
}


export async function PUT(req) { }

export async function DELETE(req) { }
