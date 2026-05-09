import { Request, Response } from "express";
import { db } from "../db";
import { users } from "../db/schema";

export const getUser = async(req: Request, res: Response) => {
    try {
        const allUsers = await db.select().from(users);

        res.json({
            status: "Success",
            data: allUsers
        });
    } catch (error){
        res.status((500)).json({
            message: "Gagal mengambil data user"
        });
    }
};

export const createUser = async(req: Request, res: Response) => {
    try {
        const {name} = req.body;

        await db.insert(users).values({name : name});

        res.status(201).json({
            status: "Success",
            message: `User ${name} berhasil dibuat`
        });
    } catch (error){
        res.status((500)).json({
            message: "Gagal membuat user"
        })
    }
};