import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditPost from "./pages/Edit";
import DeletePost from './pages/Delete';
import ReadPost from './pages/Read';
import CreatePost from './pages/Create';
import SinglePost from './pages/SinglePost';
import Home from './component/Home';
import BigONotation from './review/BigONotation';
import HashTables from './review/HashTables';
import StacksAndQueues from './review/StacksAndQueues';
import Heaps from './review/Heaps';
import LinkedList from './review/LinkedList';
import MultiplePass from './review/MultiplePass';
import TempHead from './review/TempHead';
import TwoPointer from './review/TwoPointer';
import StringsAndArrays from './review/StringsAndArrays';
import BinaryTrees from './review/BinaryTrees';
import PreorderTraversal from './review/PreorderTraversal';
import InorderTraversal from './review/InorderTraversal';
import TopologicalSorting from './review/TopologicalSorting';


function App() {

  return (
    <Router className='w-full h-screen bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<ReadPost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/delete/:id" element={<DeletePost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/review/big-o-notation" element={<BigONotation />} />
        <Route path="/review/hash-tables" element={<HashTables />} />
        <Route path="/review/stacks-and-queues" element={<StacksAndQueues />} />
        <Route path="/review/heaps" element={<Heaps />} />
        <Route path="/review/linked-list" element={<LinkedList />} />
        <Route path="/review/multiple-pass" element={<MultiplePass />} />
        <Route path="/review/temp-head" element={<TempHead />} />
        <Route path="/review/two-pointer" element={<TwoPointer />} />
        <Route path="/review/strings-and-arrays" element={<StringsAndArrays />} />
        <Route path="/review/binary-tress" element={<BinaryTrees />} />
        <Route path="/review/binary-tree-preorder-traversal" element={<PreorderTraversal />} />
        <Route path="/review/binary-tree-inorder-traversal" element={<InorderTraversal />} />
        <Route path="/review/topological-soirting" element={<TopologicalSorting />} />
      </Routes>
    </Router>
  )
}

export default App
