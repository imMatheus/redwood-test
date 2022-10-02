import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        body: 'String',
        post: {
          create: {
            body: 'String',
            owner: {
              create: {
                email: 'String1351652',
                username: 'String7572103',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        body: 'String',
        post: {
          create: {
            body: 'String',
            owner: {
              create: {
                email: 'String5310',
                username: 'String5458841',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
