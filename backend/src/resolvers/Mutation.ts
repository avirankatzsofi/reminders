import { MutationResolvers } from '../generated/graphqlgen'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createReminder: (parent, {  content }, ctx) => {
    return ctx.prisma.createReminder({
      content,
    })
  },
  deleteReminder: (parent, { id }, ctx) => {
    return ctx.prisma.deleteReminder({
      id,
    })
  },
}
