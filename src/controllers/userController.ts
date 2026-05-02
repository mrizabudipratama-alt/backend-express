import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
    const users = [
        { id: 1, name : "Panji"},
        { id: 2, name : "Davi"}
    ];
    res.json({
        status: "Success",
        data: users
    });
};

export const createUser = (req: Request, res: Response) => {
    const { name } = req.body;

    res.status(201).json({
        status: "Success",
        message: `User ${name} berhasil dibuat`
    }); 
};