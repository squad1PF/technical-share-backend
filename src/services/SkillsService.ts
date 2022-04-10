import { SkillsRepositories } from '../repositories/SkillsRepositories'

interface ISkillRequest {
  name: string
  level: number
}

class SkillsService {
  async execute({ name, level }: ISkillRequest) {
    const skillsRepository = new SkillsRepositories()

    console.log(
      `\n\n\n Valor recebido em name = ${name}\n\n\n Valor recebido em level = ${level}\n\n\n
      ${typeof level}\n\n\n`
    )
    //linha a baixo esta dando erro, porque ?
    const skill = skillsRepository.create()

    console.log(
      `\n\n\nValor de skill = ${skill}\n\n\n Valor recebido em name = ${name}\n\n\n Valor recebido em level = ${level}`
    )

    skillsRepository.save(skill)
    return skill
  }
}
export { SkillsService }
