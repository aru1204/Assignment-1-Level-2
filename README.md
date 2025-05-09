## TypeScript Q&A

### Question No. 1 - What are some differences between interfaces and types in TypeScript?

**Answer**  
There’s a difference in syntax between `interface` and `type`. An interface declaration in TypeScript starts with the `interface` keyword, and a type declaration starts with the `type` keyword. Then the name of the interface or type is written. In the case of `interface`, curly braces `{}` are used to declare the structure. For `type`, the name is followed by an equal sign `=`, and then the declaration starts inside the braces.

For objects, interfaces are easier to use. However, for other complex declarations, `type` is more flexible. One limitation of `type` is the lack of declaration merging, which interfaces support. On the other hand, it is easier to declare a `type` for any data type, including unions and primitives.

---

### Question No. 3 - Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

**Answer**  
The `any` type can accept any value—number, string, object, etc.—without any error. It bypasses type checking entirely.  
The `unknown` type is similar but safer. You must check the type before using it. This makes it more secure compared to `any`.

The `never` type is used when a function never returns anything, such as when it throws an error or runs an infinite loop.  
Using `any` is not very safe, while `unknown` is fairly safe because of the enforced type checking. `never` is used to represent unreachable code or functions that don’t return.

In short:
- `any`: accepts anything, no type checks.
- `unknown`: accepts anything, but requires a type check before use.
- `never`: represents values that never occur.
