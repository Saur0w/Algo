
class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ){}
}

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    function postorderHelper(node: TreeNode | null): void {
        if (node === null) return;
        postorderHelper(node.left);
        postorderHelper(node.right);
        result.push(node.val);
    }
    postorderHelper(root);
    return result;
}
