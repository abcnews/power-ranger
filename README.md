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

## License
Copyright (c) 2015, Australian Broadcasting Corporation

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
