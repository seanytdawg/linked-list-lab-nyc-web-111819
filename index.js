function getName(node){
    return node["name"]
}

function headNode(linkedList, collection){

    return collection[linkedList]
}

function next(head, collection){
    let nextNode = head.next

    return collection[nextNode]
}


function nodeAt(index, linkedList, collection){

    let rightNode = headNode(linkedList, collection)
    for(let i = 0; i < index; i++){
       rightNode = next(rightNode, collection)
    }
    return rightNode
}

function addressAt(index, linkedList, collection){

    if(index == 0){
        return linkedList
    }
    else {
        let node = nodeAt(index-1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList){

    let currentNode = headNode(linkedList, collection)
    let nodeIndex = 0
    while(currentNode != node){
       currentNode = next(currentNode, collection)
       nodeIndex++
       }
    return nodeIndex

}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)

    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress

}

function deleteNodeAt(index, linkedList, collection) {
    let previousNode 
    let currentNode = headNode(linkedList, collection)

    for(let i = 0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection)
    }

    previousNode.next = currentNode.next
}

