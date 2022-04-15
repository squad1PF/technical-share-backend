import { Router }  from 'express';
import { CreateMentorshipController } from '../controllers/CreateMentorshipController';

const mentorshipsRoutes = Router();

const createMentorshipController = new CreateMentorshipController();

mentorshipsRoutes.post('/', createMentorshipController.handle);

export { mentorshipsRoutes }