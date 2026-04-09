import prisma from '../config/db.js';

export async function findAll(completed) {
  const args = completed === undefined ? {} : { where: { completed } };
  return prisma.task.findMany(args);
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
