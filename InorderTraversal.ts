class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    function inorderHelper(node: TreeNode | null): void {
        if (node === null) return;
        inorderHelper(node.left);
        result.push(node.val);
        inorderHelper(node.right);
    }
    inorderHelper(root);
    return result;
}