import { lusitana } from '@/app/ui/fonts';

import { fetchAllInvoices } from '@/app/lib/data';
import AllInvoices from '@/app/ui/dashboard/all-invoices';

export default async function Page() {
    const allInvoices = await fetchAllInvoices();
    return (
    <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Revenue
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {<AllInvoices invoices={allInvoices} /> }
        </div>
    </main>
    );    
}