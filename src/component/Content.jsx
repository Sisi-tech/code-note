import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className="w-full h-screen bg-black text-white flex flex-col pt-10 items-center gap-8 p-2">
            <div className='flex flex-col gap-2 items-start'>
                <h1 className='md:text-4xl text-3xl pb-2'>Data structures and algorithms</h1>
                <p className='text-xl'>Data Structures is about how data can be stored in different structures.</p>
                <p className='text-xl'>Algorithms is about how to solve different problems, often by searching through and manipulating data structures.</p>
            </div>
            <div className='flex flex-col gap-4 items-start'>
                <h2 className='text-2xl'>Review</h2>
                <ul className='grid grid-cols-2 gap-4 md:gap-x-80 gap-x-8 text-xl'>
                    <li>
                        <Link to="/review/big-o-notation">- Big O Notation</Link>
                    </li>
                    <li>
                        <Link to="/review/hash-tables">- Hash Tables</Link>
                    </li>
                    <li>
                        <Link to="/review/stacks-and-queues">- Stacks and Queues</Link>
                    </li>
                    <li>
                        <Link to="/review/heaps">- Heaps</Link>
                    </li>
                    <li>
                        <Link to="/review/linked-lists">- Linked Lists</Link>
                    </li>
                    <li>
                        <Link to="/review/temp-head">- Temp Head</Link>
                    </li>
                    <li>
                        <Link to="/review/multiple-pass">- Multiple pass</Link>
                    </li>
                    <li>
                        <Link to="/review/two-pointer">- Linked List Two Pointer</Link>
                    </li>
                    <li>
                        <Link to="/review/strings-and-arrays">- Strings and Arrays</Link>
                    </li>
                    <li>
                        <Link to="/review/binary-trees">- Binary Trees</Link>
                    </li>
                    <li>
                        <Link to="/review/binary-tree-preorder-traversal">- Binary Tree Preorder Traversal</Link>
                    </li>
                    <li>
                        <Link to="/review/binary-tree-inorder-traversl">- Binary Tree Inorder Traversal</Link>
                    </li>
                    <li>
                        <Link to="/review/topological-sorting">- Topological sorting</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Content;
