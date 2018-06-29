import * as fs from 'fs-extra'
import * as spinner from '../../spinner'

export default async function copyTemplate(templatePath: string, targetPath: string): Promise<void> {
  spinner.create('Copy template')
  await fs.copy(templatePath, targetPath)
}
