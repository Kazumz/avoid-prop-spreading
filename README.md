# React Prop Spreading
Prop spreading in JavaScript is a wonderful thing, it allows you to easily merge and concatenate objects by writing clear and simple syntax to achieve it.

Let's look at a verbose example of what you'd need to do before prop spreading to append an array on to another.
- [No Spreading Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/WithoutSpreading.tsx)

While valid in nature, with plenty of examples of this approach out there in the industry, it's syntax heavy. At least, with the spread operator known and in existence. 

How would this look syntactically using the spread operator to achieve the same concatenation result? Let's take a peek at a different example.
- [Spreading Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/Spreading.tsx)

With this little sprinkle of syntactic sugar, we've reduced the concatenation operation to a single line of code. The spread operator under the hood flattens out that array in to the new array that we're creating.

In these sorts of examples, it makes total sense to use spread operators. 
They're a no-brainer, especially when dealing with old school redux immutability and state replacement syntax in a reducer - without the spread operator this would be a mess.

`return {...state, replaceMe: 'withMe'};`

Let's look at a use case where we use the spread operator to pass props from a parent to a child component. 
- [Implicit Props Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/ImplicitProps.tsx)

Clean right? We don't need to maintain passing props to the sub component if we choose to add a new prop in and pass it to the child. 
However, there's an issue here. While in terms of maintainability it makes things a little easier, we now have a window for cross-contamination and inappropriate re-renders. 
If we uncomment the 'notCaughtByLinter' property, then there's no error thrown by TypeScript or ESLint. It's happy to pass this prop down to the sub component even though the sub component doesn't use nor implement it

Let's put this to the test, what if we change this 'notCaughtByLinter' prop every so often in another example?
- [Implicit Props Propagating Renders Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/ImplicitPropsPropagatingRenders.tsx)

In this example we can see that every 500ms the 'notCaughtByLinter' will be negated false > true > false. We then pass these parsed props down to the child component. 
Again in this instance, the sub component does not care about the 'notCaughtByLinter' prop, so what would happen if we now decided to apply some optimisation to only render the sub component when it's props change?

In this example, the sub component is wrapped in 'React.memo' which shallow compares previous and next props to determine if it should trigger a re-render. A great optimisation for heavy components such as data grids.
- [Memo Implicit Props Propagating Renders Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/MemoImplicitPropsPropagatingRenders.tsx)

Within the memoised sub component here, I've placed a console log. Even though we do not change id or title, you can see in the console that this component is re-rendering every 500ms. 

How do we correct this? The solution is simple. Be explicit. Only pass in props to the child component that is actually wanted and consumed by the child component.
- [Explicit Props Propagating Renders Example](https://github.com/Kazumz/avoid-prop-spreading/blob/main/src/examples/ExplicitPropsPropagatingRenders.tsx)

As you can see here, the only difference between the previous example and this one is that I'm explicitly passing in Id and Title as individual props to the sub component, rather than spreading all of the parents props to the child component.
This means that the memoisation can actually take affect because when the parent component re-renders, React knows the child subcomponents props haven't changed since the previous iteration, so can avoid an inappropriate re-render.

# Appendix
- https://vhudyma-blog.eu/react-antipatterns-props-spreading/
- https://dev.to/maybebored/comment/ci01
- https://sebhastian.com/react-spread-props/
- https://reactjs.org/warnings/unknown-prop.html

# Limitations
- Please ensure FanDuel's assets as part of this repository are not reused or redistributed without explicit permission. (Exempt from the MIT licence applied here)