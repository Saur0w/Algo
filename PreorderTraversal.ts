class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ){}
}

function preorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    function preorderHelper(node: TreeNode | null): void {
        if (node.left === null) return;
        result.push(node.val);
        preorderHelper(node.left);
        preorderHelper(node.right);
    }
    preorderHelper(root);
    return result;
}

