**What is JSX, and why is it used?**
- short form of JavaScript XML, it's used to write HTML-like syntax in JS, making it easier to write both HTML and JS in one file. It's primarily used in React to make UI components.


**What is the difference between State and Props?**
- State is like a Local variable in a component used to manage data. It's mutable and incurs UI changes.
- Props are data passed from the parent to the child component. It's like a function argument. It's Unidirectional and Immutable within the child component.

  
**What is the useState hook, and how does it work?**
- useState is used to add state to functional components.
It takes an initial value (strings,nums,arr,obj) and returns the current state along with a function to update it.
When the updater function is called, React re-renders the component with the new state.

syntax:
import React, { useState } from 'react';
const [example, useExample] = useState(initialValue)
useExample(updatedValue)

**How can you share state between components in React?**
- By 'lifting up the state' to the closest parent component.

  
**How is event handling done in React?**
- using onClick/onChange.
  syntax:
  No Argument Pass -> onclick(handleClick)
  Passing Argument ->  onclick(()=>handleClick(args))
