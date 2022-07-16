/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s[0] === ')' || s[0] === '}' || s[0] === ']' || s.length === 1){
        return false
    }     
    let stack=[]
    const closeOpen={
        "(":")",
        "{":"}",
        "[":"]"
    }
        
    for(i=0;i<s.length;i++){
        const c=s[i]        
        if(!closeOpen[c]){
            if(closeOpen[stack[stack.length-1]]===c){
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(c)
        }
        
    }
   return stack.length===0 ?  true :  false
};