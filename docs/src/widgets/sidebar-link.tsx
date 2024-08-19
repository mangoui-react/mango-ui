import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppProvider } from '@/app/(default)/app-provider';

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function SidebarLink({ children, href }: SidebarLinkProps) {
  const pathname = usePathname();
  const { setSidebarOpen } = useAppProvider();

  return (
    <Link
      className={`flex items-center space-x-3 rounded-2xl px-4 py-2 font-medium ${
        pathname === href
          ? 'bg-blue-100 font-bold text-blue-600 dark:bg-opacity-10 dark:text-blue-300'
          : 'text-slate-800 dark:text-slate-200'
      }`}
      href={href}
      onClick={() => {
        setSidebarOpen(false);
      }}
    >
      {children}
    </Link>
  );
}
