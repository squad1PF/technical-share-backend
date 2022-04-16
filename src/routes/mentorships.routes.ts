import { Router }  from 'express';
import { CreateMentorshipController } from '../controllers/CreateMentorshipController';
import { FindAllMentorshipsController } from '../controllers/FindAllMentorshipsController';
import { FindMentorshipController } from '../controllers/FindMentorshipController';

const mentorshipsRoutes = Router();

const createMentorshipController = new CreateMentorshipController();
const findMentorshipController = new FindMentorshipController();
const findAllMentorshipsController = new FindAllMentorshipsController();

mentorshipsRoutes.post('/', createMentorshipController.handle);
mentorshipsRoutes.get('/', findMentorshipController.handle);
mentorshipsRoutes.get('/:id', findAllMentorshipsController.handle);

export { mentorshipsRoutes }