import { Router } from 'express';
import { UsersRouter } from './users/users.router';

const AppRouter: Router = Router();

AppRouter.use('/api/users', UsersRouter);

/* istanbul ignore next */
AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };