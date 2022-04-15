import { EntityRepository, Repository } from "typeorm";
import { Mentorship } from "../entities/Mentorship";

@EntityRepository(Mentorship)
class MentorshipsRepositories extends Repository<Mentorship> {}

export { MentorshipsRepositories }