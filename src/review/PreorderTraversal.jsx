import Head from "./Head"

const PreorderTraversal = () => {
    return (
        <div className="w-full flex flex-col gap-8 pb-20">
            <Head />
            <section className="flex flex-col pl-40 pr-40 gap-8">
                <h1 className="text-4xl font-semibold">Binary Tree Preorder Traversal</h1>
            </section>
        </div>
    )
}

export default PreorderTraversal;