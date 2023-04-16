const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (this.node == null) {
      return null
    }
    return this.node
  }

  add(value) {
    this.node = addWithin(this.node, value)
    function addWithin(node, value) {
      if (!node) {
        return new Node(value)
      }
      if (node.value === value) {
        return node
      }
      if (value < node.value) {
        node.left = addWithin(node.left, value)
      } else {
        node.right = addWithin(node.right, value)
      }
      return node
    }
    return this.node
  }

  // has(data) {
  //   this.node = searchWithin(this.node, data)
  //   function searchWithin(node, value) {
  //     if (!node) {
  //       return false
  //     }
  //     if (node.value === value) {
  //       return true
  //     }
  //     return value < node.value
  //       ? searchWithin(node.left, value)
  //       : searchWithin(node.right, value)
  //   }
  //   return this.node
  // }

  has(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
}
