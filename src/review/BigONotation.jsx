import Head from "./Head";

const BigONotation = () => {
    return (
        <div className="w-full flex flex-col gap-8 pb-20">
            <Head />
            <section className="flex flex-col pl-40 pr-40 gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold">Big O Complexity Analysis</h1>
                    <p className="font-serif">"Algorithm Complexity: you need to know Big-O. It's a must. If you struggle with basic big-O complexity analysis, then you are almost guaranteed not to get hired." -- Steve Yegge, "[Get that job at Google]"</p>
                </div>
                <section className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Introduction</h2>
                    <p>Big O notation is used to describe the complexity of an algorithm when measuring its efficiency, which in this case means how well the algorithm scales with the size of the dataset. (Broadly speaking, the process of measuring this type of efficiency is known as "Complexity Analysis," and "Big O" simply refers to the notational system we use to talk about it.) It is important to note that Big O notation represents the worst case scenario - the input for which the function in question would perform least efficiently.</p>
                    <p>Big O is represented with the following syntax: O(n). The value we're concerned with is between the parentheses and will in most cases include the variable n, which denotes the size of the algorithm's input. In most scenarios (i.e., interview problems), the algorithm will be a simple function, and n will typically refer to the size of a collection taken by the function as its input. The value between the parentheses expresses that function's complexity in terms of n.</p>
                    <p>Complexity is measured in two dimensions: time (how long a function takes to complete), and space (how much memory a function consumes while executing). So a simple way to think about a function's complexity is to consider the number of things it does or creates (x) as multiplied by the size of the input (n). The trick is that the "number of things it does or creates" is represented in Big O notation not as variable such as x but instead as a constant: 1. So instead of O(x * n), the complexity would be expressed as O(1 * n) or, simply, O(n). Therefore a function with a time complexity of O(n) performs a given number of steps multiplied by n.</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Examples</h2>
                    <p>In all of the following examples, we'll consider a single function that takes an array of items as input and has no output: a method with the signature void someFunction(int[] inputArray). So in all the following examples, n will represent the length of inputArray, and we'll express the complexity the method's body using Big O in relation to n.</p>
                    <h3 className="text-2xl font-semibold">O(1) - Constant Complexity</h3>
                    <p>Let's start with one of the simplest possible implementations of this method, one which does nothing but print the size of the input array:</p>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                        {`public void someFunction(int[] inputArray) {
    System.out.println("n = " + inputArray.length);
    }`}
                        </code>
                    </pre>
                    <p>This function runs in O(1) time (or constant time). Because this method takes the same amount of time to complete irrespective of the input size, we ignore n entirely when expressing the complexity. The input array could contain 1 item or 1,000 items, but this function would still just require one "step."</p>
                    <h3 className="text-2xl font-semibold">O(n) - Linear Complexity</h3>
                    <p>A simple O(n) example would perform the same set of actions for every item in the input array. In this case we're using a for loop, but the same complexity could be achieved via recursion or other means.</p>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`public void someFunction(int[] inputArray) {
  for (int item : inputArray) {
    System.out.println(item);
  }
}`}
                        </code>
                    </pre>
                    <p>This function runs in O(n) time (or linear time), where n is the number of items in the array. If the array has 10 items, the function calls System.out.println 10 times. If it has 1,000 items, it calls it 1,000 times.</p>
                    <h3 className="text-2xl font-semibold">O(n2) - Quadratic Complexity</h3>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`public void someFunction(int[] inputArray) {
  for (int firstItem : inputArray) {
    for (int secondItem : inputArray) {
      int[] orderedPair = new int[] {firstItem, secondItem};
      System.out.println(Arrays.toString(orderedPair));
    }
  }
}`}
                        </code>
                    </pre>
                    <p>Here we're nesting two loops. If our array has n items, our outer loop runs n times and our inner loop runs n times for each iteration of the outer loop, giving us n2 total calls to System.out.println. Thus this function runs in O(n2) time (or quadratic time). If the array has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.</p>
                    <h3 className="text-2xl font-semibold">O(log n) - Logarithmic Complexity</h3>
                    <pre className="p-5 border-gray-300 border bg-gray-50">
                        <code>
                            {`public void someFunction(int[] inputArray) {
  for (int i = 1; i <= inputArray.length; i = i * 2) {
    System.out.println(item[i]);
  }
}`}
                        </code>
                    </pre>
                    <p>Here we have simple loop in which the post operation of the for statement multiples the current value of i by 2, so i goes from 1 to 2 to 4 to 8 to 16 to 32 and so on.</p>
                    <p>O(log n) is considered to be fairly efficient. The time taken increases with the size of the data set, but not proportionately so. This means the algorithm takes longer per item on smaller datasets relative to larger ones. 1 item takes 1 second, 10 items takes 2 seconds, 100 items takes 3 seconds. If your dataset has 10 items, each item causes 0.2 seconds latency. If your dataset has 100, it only takes 0.03 seconds extra per item. This makes O(log n) algorithms very scalable.</p>
                    <h3 className="text-2xl font-semibold">Other Examples</h3>
                    <p>While the above are the most common, there are many other well known examples of Big O complexities. A few additional ones you may encounter:</p>
                    <ul>
                        <li>* O(n3) - Cubic Complexity: Similar to O(n2), but consider that example with an added nested loop.</li>
                        <li>* O(n log n) - Linearithmic Complexity: The Merge sort worst case complexity is O(n log n).</li>
                        <li>* O(2n) - Exponential Complexity: The algorithm takes twice as long for every new element added, so even small increases in n dramatically increase the running time.</li>
                    </ul>
                </section>
            </section>
        </div>
    )
}

export default BigONotation;