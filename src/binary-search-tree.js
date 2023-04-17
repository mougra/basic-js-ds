const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.binary = null
  }

  root() {
    return this.binary
  }

  add(value) {
    this.binary = addWithin(this.binary, value)
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
    return this.binary
  }

  // has(value) {
  //   let node = this.node

  //   while (true) {
  //     if (node.value > value) {
  //       if (node.left) {
  //         node = node.left
  //       } else {
  //         return false
  //       }
  //     } else if (node.value < value) {
  //       if (node.right) {
  //         node = node.right
  //       } else {
  //         return false
  //       }
  //     }

  //     if (node.value === value) return true
  //   }
  // }

  has(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
  }

  remove(data) {
    this.node = removeNode(this.node, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
    return this.node
  }

  // remove(/* data */) {
  //   throw new NotImplementedError('Not implemented')
  //   // remove line with error and write your code here
  // }

  min() {
    if (!this.binary) return null

    let node = this.binary

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.binary) return null

    let node = this.binary

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}
