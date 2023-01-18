import { FastifyInstance } from "fastify"
import {prisma} from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {
    app.get('/', async () => {
        const habits = await prisma.habit.findMany()
    
        return habits
    })
}

// Metodo HTTP: Get, Post, Put, Patch, Delete
// Get: Pegar 
// Post: Colocar 
// Put: Atualiza dados gerais
// Patch: Atualiza dado especificado

