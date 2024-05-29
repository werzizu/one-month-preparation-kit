const _strings = ["aba", "xzxb "," ab", "     ab "]
const _queries = ["aba ", "xzxb ","ab "]

function matchingStrings(strings, queries) {
    // Write your code here
    const matches = [];
    for(let j = 0; j < queries.length; j++){
        matches[j] = 0;
        for(let i = 0; i < strings.length; i++){
            if(strings[i].trim() === queries[j].trim()){
                matches[j]++
            }
        }
    }
    return matches;
}


matchingStrings(_strings, _queries);