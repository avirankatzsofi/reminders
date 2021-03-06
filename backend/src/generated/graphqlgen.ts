// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Reminder } from "./prisma-client";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsReminder {
    id: string;
  }

  export type ReminderResolver = (
    parent: undefined,
    args: ArgsReminder,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Reminder | null | Promise<Reminder | null>;

  export type RemindersResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Reminder[] | Promise<Reminder[]>;

  export interface Type {
    reminder: (
      parent: undefined,
      args: ArgsReminder,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Reminder | null | Promise<Reminder | null>;

    reminders: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Reminder[] | Promise<Reminder[]>;
  }
}

export namespace ReminderResolvers {
  export const defaultResolvers = {
    id: (parent: Reminder) => parent.id,
    content: (parent: Reminder) => parent.content
  };

  export type IdResolver = (
    parent: Reminder,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ContentResolver = (
    parent: Reminder,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Reminder,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    content: (
      parent: Reminder,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateReminder {
    content: string;
  }

  export interface ArgsDeleteReminder {
    id: string;
  }

  export type CreateReminderResolver = (
    parent: undefined,
    args: ArgsCreateReminder,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Reminder | Promise<Reminder>;

  export type DeleteReminderResolver = (
    parent: undefined,
    args: ArgsDeleteReminder,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Reminder | null | Promise<Reminder | null>;

  export interface Type {
    createReminder: (
      parent: undefined,
      args: ArgsCreateReminder,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Reminder | Promise<Reminder>;

    deleteReminder: (
      parent: undefined,
      args: ArgsDeleteReminder,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Reminder | null | Promise<Reminder | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Reminder: ReminderResolvers.Type;
  Mutation: MutationResolvers.Type;
}
