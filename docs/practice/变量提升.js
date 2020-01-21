console.log(foo())
function foo() {
    return bar()
    var bar=function () {return 5;}
    var bar=()=>6;
    var bar=(function () {
        return 7
    })()
    function bar(){
        return 8
    }
}