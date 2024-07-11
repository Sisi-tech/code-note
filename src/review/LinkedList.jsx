import Head from "./Head"

const LinkedList = () => {
    return (
        <div className="w-full flex flex-col gap-8 pb-20">
            <Head />
            <section className="flex flex-col pl-40 pr-40 gap-8">
                <h1 className="text-4xl font-semibold">Linked List</h1>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Introduction</h2>
                    <p>A call stack is simply a trace from where the program is currently at all the way back to the start of that process or thread. This simple trail home is essential for the computer to know what to do when the current function it is working on exits. In this case, the computer knows it can just go to the first item on that stack remove it from the list, making the second item now the first thing on the stack, and then doing the rest of the work that the previous first item was pointing to. This sequence of one item (address in memory) pointing to another item (address in memory) pointing to another item, and so on, forms a Linked List.</p>
                    <p>The most common variants of linked lists are:</p>
                    <ul>
                        <li>* Singly Linked List</li>
                        <li>* Doubly Linked List</li>
                        <li>* Circular Linked List</li>
                    </ul>
                    <p>All variants refer to how the items (nodes) of the list point to each other. The Singly Linked List will only have one pointer that has a reference to the next node in the list, whereas, the Doubly Linked List would have a pointer to the next item as well as the previous item. In almost ALL interviewing scenarios the linked list will be the Singly Linked List and the rest of the documentation will refer to linked list as that and only the other list types if specifically mentioned.</p>
                    <p>A minimal, but quite common Python definition of a linked list node would be:</p>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`class ListNode: 
    def __init__(self, val):
        self.val = val
        self.next = None`}
                        </code>
                    </pre>
                    <p>Where,</p>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`head = ListNode(1)
head.next = ListNode(2)`}
                        </code>
                    </pre>
                    <p>, would create the list 1 -> 2 and 1 is at the head (front) of the list.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Pros and Cons</h2>
                    <p>If we think about the call stack example, we were only really operating on one side (the head) of the list. Our operations consisted of 1) going to the head of the list in order to find the next function that our process needed to run and 2) adding a new function to the head of the list and having the node that holds that function point to the previous head.</p>
                    <p>Linked Lists really shine when we confine our operations to one end of the data structure and also are dealing with arbitrary, yet small sizes (number of list nodes). The linked list is a good choice in this case because it is both simple to work with and efficient.</p>
                    <p>Lists do not do well when you want to support random access, i.e., work at any arbitrary location in the list. This is because the only way to get to the back of the list, is to go one node at a time asking for the next item down until you reach your desired location.</p>
                    <p>We also don't like to store large amounts of information in linked lists because for every value you store you pay an extra storage penalty of Node object that decorates the item you want to store. Let's summarize the complexity tradeoffs as follows:</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2>Time and Space Complexity</h2>
                    <p><span className="font-semibold">* Best cases: </span>-- a position in a list that contains the value of whatever is stored at the position as well as at least one reference to another node.</p>
                    <p><span className="font-semibold">* Head</span>-- node at the beginning of the list.</p>
                    <p><span className="font-semibold">* Tail</span>-- node at the end of the list.</p>
                    <p><span className="font-semibold">* Sentinel</span>--a temp node, typically placed at the head or end of the list to help make operations simpler (e.g., delete) or to indicate the termination of the list.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Common Operations</h2>
                    <h3 className="text-2xl font-semibold">Insert</h3>
                    <pre>
                        <code>
                            {`def insert(self, val):
    n = ListNode(val)
    n.next = self
    return n`}
                        </code>
                    </pre>
                    <h3 className="text-2xl font-semibold">Delete</h3>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`def delete(self, val):
    s = ListNode("sentinel")
    s.next = self
    p = s
    c = self
    while c:
        if c.val == val:
            p.next = c.next
            return s.next
        p = c
        c = c.next
    return s.next`}
                        </code>
                    </pre>
                    <h3 className="text-2xl font-semibold">Length of List</h3>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`def __len__(self):
    c = self
    l = 0
    while c:
        l += 1
        c = c.next
    return l`}
                        </code>
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default LinkedList; 