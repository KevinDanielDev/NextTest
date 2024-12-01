import { Metadata } from "next";
import DashboardLayout from "../layout";


// Seo friendly metadata
export const metadata: Metadata = {
    title: 'QuickBet - Dashboard',
    description: 'Dashboard',
    keywords: ['QuickBet', 'Dashboard', 'Welcome', 'Home', 'Page', 'Movies'],
};

export default function DashboardPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-900 text-white">
                <DashboardLayout />
            </div>
        </>
    )
}
