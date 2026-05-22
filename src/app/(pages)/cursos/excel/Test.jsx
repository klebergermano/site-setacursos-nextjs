'use client'
import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';


function TestComp() {

    const [title, setTitle] = useState('');
    // const router = useRouter();
    const pathname = usePathname()
    useEffect(() => {

        setTitle(pathname)

    }, [pathname]);


    return (

        <div style={{ background: "aqua" }}>
            <h1>Título Test</h1>
            <h2>{title}</h2>
        </div>
    )

}
export default TestComp