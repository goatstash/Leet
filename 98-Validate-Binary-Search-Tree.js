/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isEmpty(arr) {
  return arr.length === 0
}

var isValidBST = function (root) {
  let stack = []
  let leftChild = Number.NEGATIVE_INFINITY

  while (!isEmpty(stack) || root != null) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= leftChild) {
      return false
    }
    leftChild = root.val
    root = root.right
  }
  return true
}
