'use client';

import {
    FileText,
    FolderOpen,
    Home,
    Mail,
    Settings,
    Upload
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/lib/store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Upload, label: 'Upload', href: '/upload' },
    { icon: Mail, label: 'Emails', href: '/emails' },
    { icon: FileText, label: 'Documents', href: '/documents' },
    { icon: FolderOpen, label: 'Files', href: '/files' },
    { icon: Settings, label: 'Settings', href: '/settings' }
];

export function Sidebar({ children }: { children: React.ReactNode }) {
    const { isOpen } = useSidebarStore();
    const pathname = usePathname();

    return (
        <div className="flex">
            <aside
                className={cn(
                    'h-[calc(100vh-4rem)] w-0  border-r bg-background transition-all duration-300 ease-in-out',
                    isOpen ? 'ml-0 w-60' : '-ml-60'
                )}
            >
                <ScrollArea className="h-full py-6">
                    <div className="space-y-4 px-3">
                        {menuItems.map((item) => (
                            <Button
                                key={item.href}
                                variant={
                                    pathname === item.href
                                        ? 'secondary'
                                        : 'ghost'
                                }
                                className="w-full justify-start"
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.label}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </aside>
            <div className="flex-1">{children}</div>
        </div>
    );
}
