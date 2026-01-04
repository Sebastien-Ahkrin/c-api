import Group from '#models/group'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

const groups: Partial<Group>[] = [
  { name: 'bureau' },
  { name: 'adultes' },
  { name: 'jeunes' },
  { name: 'autre' },
]

export default class DatabasePopulate extends BaseCommand {
  static commandName = 'database:populate'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    await Group.createMany(groups)
    this.logger.info(`Populating ${groups.length} groups`)
  }
}
