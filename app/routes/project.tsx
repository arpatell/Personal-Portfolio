// src/routes/api/project.ts
import { json } from '@remix-run/node';
import { PrismaClient } from '@prisma/client'; // Import Prisma Client

export let loader = async () => {
  const prisma = new PrismaClient(); // Create a new Prisma Client instance

  try {
    // Fetch projects from the database using Prisma Client
    const projects = await prisma.project.findMany();
    
    // Return the projects as JSON
    return json(projects);
  } catch (error) {
    // Handle errors, e.g., log them or return an error response
    console.error('Error fetching projects:', error);
    return json({ error: 'An error occurred while fetching projects.' }, 500);
  } finally {
    // Don't forget to disconnect Prisma Client when done
    await prisma.$disconnect();
  }
};
