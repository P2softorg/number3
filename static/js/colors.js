let colors = ['red', 'black', 'green', 'blue', 'white', 'yellow', 'purple']


function myComponent(startName = '') {
    return {

        name: startName,

        hello(name = '') {
            // alert('Hi ' + name );
            return 'hello ' + name
        },

        printList(myList){
            for (i = 0; i <myList.length; i++){
             return 'this is a list ' + myList[i]
}
        } ,

    }
}

