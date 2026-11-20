"use server";

import { db, connectDB } from "@/lib/db";


export async function getCategories()
{
	await connectDB();

        const categories = await db.assignment.findMany();

        return categories;
}


export async function saveSelectedCategoryTypes(categoryId: number)
{
	await connectDB();

        const categories = await db.categories.findMany();

        return categories;
}