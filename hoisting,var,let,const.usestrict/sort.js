//sort
//If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
//If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
//If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
//compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.




function compare(a, b) {
    if ("a is less than b by some ordering criterion") {
      return -1;
    }
    if ("a is greater than b by the ordering criterion") {
      return 1;
    }
    // a must be equal to b
    return 0;
  }