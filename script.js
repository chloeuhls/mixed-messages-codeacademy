console.log("Welcome to the Fortune Teller")

function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

function messageGenerator() {
    beginning = ["In one day", "In three weeks", "In one year", "In five Years", "In the near future", "One day"]
    middle = ["you will receive", "you will find", "you will create", "you will meet", "you will fight for"]
    end = ["a fortune", "pure bliss", "evil", "your soulmate", "your dream city", "pasta"]

    begNum = randomNumber(beginning.length)
    middleNum = randomNumber(middle.length)
    endNum = randomNumber(end.length)

    message = beginning[begNum] + " " + middle[middleNum] + " " + end[endNum] + "."

    return message

}

console.log(messageGenerator())
