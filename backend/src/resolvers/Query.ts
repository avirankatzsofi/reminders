import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  reminders: (parent, ags, ctx) => ctx.prisma.reminders({ orderBy: "content_ASC" }),
  reminder: (parent, { id }, ctx) => ctx.prisma.reminder({ id })
};
