import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to My Pro App</h1>
      <p className="text-xl text-gray-600">
        This is a professional Next.js application with TypeScript, Tailwind CSS, and more.
      </p>
      <div className="space-x-4">
        <Button variant="primary" size="lg">Get Started</Button>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </div>
  );
}
