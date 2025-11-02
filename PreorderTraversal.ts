class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ){}
}

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    function preorderHelper(node: TreeNode | null): void {
        if (node === null) return;
        result.push(node.val);
        preorderHelper(node.left);
        preorderHelper(node.right);
    }
    preorderHelper(root);
    return result;
}

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
);

console.log(preorderTraversal(root));