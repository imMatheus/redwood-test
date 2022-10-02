import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        body: 'String',
        owner: {
          create: {
            email: 'String4093920',
            username: 'String3989350',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        post: {
          create: {
            body: 'String',
            topic: 'String',
            owner: {
              create: {
                email: 'String814736',
                username: 'String6084762',
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
        owner: {
          create: {
            email: 'String8815343',
            username: 'String7569082',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        post: {
          create: {
            body: 'String',
            topic: 'String',
            owner: {
              create: {
                email: 'String667788',
                username: 'String7729858',
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
