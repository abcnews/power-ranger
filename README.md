# Power Ranger
Make arrays of anything at any length you please.

The function takes two arguments and returns an array:
- `n`: the length of the array you want returned
- `fn`: a function which will return something to fill your array. This is optional; it defaults to an identity function.

The `fn` argument will be run `n` times and called with the following arguments:
- `i`: the array index for this result
- `r`: the resulting array so far (this is so you can make each element dependent on previous elements).

## Examples
### Simple

```
ranger(5);
// [0,1,2,3,4]
```

With a non-zero start

```
ranger(5, function(i){return 1+i;});
// [1,2,3,4,5]
```

### Exponential growth

```
ranger(5, function(i){
    return Math.pow(2,i);
});
// [1,2,4,8,16]
```
