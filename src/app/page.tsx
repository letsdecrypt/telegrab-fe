import type { PageProps } from 'rari/client'
import ServerTime from '@/components/ServerTime'
import Welcome from '@/components/Welcome'

export default function HomePage(_params: PageProps) {
  return (
    <div className="space-y-8">
      <Welcome />
      <ServerTime />
    </div>
  )
}

export const metadata = {
  title: 'Home | telegrab-fe',
  description: 'Welcome to your new Rari application',
}
