import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
    currentPage: string;
}

export const LegalBreadcrumbs = ({ currentPage }: BreadcrumbsProps) => {
    return (
        <nav className="flex items-center space-x-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home size={14} />
                <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white font-medium">{currentPage}</span>
        </nav>
    );
};
