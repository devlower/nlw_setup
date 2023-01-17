import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

// Metodo HTTP: Get, Post, Put, Patch, Delete
// Get: Pegar 
// Post: Colocar 
// Put: Atualiza dados gerais
// Patch: Atualiza dado especificado

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running!')
})