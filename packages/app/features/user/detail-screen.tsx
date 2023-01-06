import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

let once = false
const fakeApiMethod = (id = 'N/A') => {
  if (once) {
    return `User ${id}`
  }
  throw new Promise((resolve) =>
    setTimeout(() => {
      resolve((once = true))
    }, 3_000)
  )
}

export function UserDetailScreen() {
  const [id] = useParam('id')
  const linkProps = useLink({ href: '/' })
  const userName = fakeApiMethod(id)

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">
        {userName}
      </Paragraph>
      <Button {...linkProps} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
