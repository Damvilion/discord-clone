import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
const state = true;

export default function Home() {
    return (
        <main className='text-3xl text-indigo-500 font-bold'>
            <p>This is a protected Route</p>
            <UserButton afterSignOutUrl='/'></UserButton>
            <ModeToggle />
        </main>
    );
}
