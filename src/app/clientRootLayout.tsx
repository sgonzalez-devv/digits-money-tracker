'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import AppHeader from '@/components/app-header';

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isLoginPage = pathname === '/login';

    useEffect(() => {
        setIsClient(true);
        const storedUser = sessionStorage.getItem('user credentials');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

   
    if (loading) return (
        <div className='w-full h-screen flex justify-center items-center'>
            Loading...
        </div>
    );

    if (!user && !isLoginPage) {
        router.push('/login');
        return null;
    }


    if (isLoginPage) {
        return (
            <html lang="en">
                <body className="antialiased">
                    {children}
                </body>
            </html>
        );
    }

    return (
        <html lang="en">
            <body className="antialiased overflow-y-scroll">
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <AppHeader />
                        <div className="m-10">{children}</div>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
