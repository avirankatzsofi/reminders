import { Resolvers } from '../generated/graphqlgen'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Reminder } from './Reminder'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Reminder
}
