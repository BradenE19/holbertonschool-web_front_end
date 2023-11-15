const roomDimensions = {
    width: 50,
    length: 100,
    getArea(){return length * width}
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions)
console.log(boundGetArea())