import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'hello-walk-2215'
export const inject = ['router']
export function apply(ctx: Context) {
  ctx.router.route('/hello-walk-2215', new Acryl().get('/', (c) => c.json({ hello: 'from hello-walk-2215' })))
}
