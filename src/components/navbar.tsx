"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');
    return (
        <nav className='flex space-x-40 m-5 underline'>
            <Link href="/" className={todosFilter == null ? "active w-24 text-center" : "w-24 text-center"}>All</Link>
            <Link href="/?todos=active" className={todosFilter == "active" ? "active w-24 text-center" : "w-24 text-center"}>Pending</Link>
            <Link href="/?todos=completed" className={todosFilter == "completed" ? "active w-24 text-center" : "w-24 text-center"}>Completed</Link>
        </nav>
    );
}

export default Navbar;