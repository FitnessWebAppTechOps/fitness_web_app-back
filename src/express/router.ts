import { Router } from 'express';
import { usersRouter } from './users/users.router';

export const appRouter = Router();

appRouter.use('/api/features', usersRouter);

appRouter.use(['/isAlive', '/isalive', '/health'], (_req, res) => {
    res.status(200).send('alive');
});

appRouter.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
});
