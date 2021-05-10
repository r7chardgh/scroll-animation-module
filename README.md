# Scroll Animation Module

## description

A simple scroll animation module by making use of data-* attribute

## installation

This module has two ways to access

### CDN

1. Add style
```sh
    <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/r7chardgh/scroll-animation-module@1.0.0/src/style/SAD.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/r7chardgh/scroll-animation-module@1.0.0/src/style/SAD.css">
```

2. Add script
```sh
    <script src="https://cdn.jsdelivr.net/gh/r7chardgh/scroll-animation-module/dist/SAD.umd.js"></script>
    <script> window.SAD.init() </script>
```

### React Component

1. Install package
```sh
    npm install 
```
- It requires personal access token for installing github package via npm (you can download the code via github)
- The bundled script is located at `dist/` and stylesheet is located at `src/style/SAD.css`

2. Import style
```sh
    import "@r7chardgh/sad/src/style/SAD.css";
```

3. Import script
```sh
    import {init} from '@r7chardgh/sad';
    const App=props=>{
        useEffect(()=>{
            init();
        },[])

        //...
    }
```
- It is recommended to add function inside useEffect hook, because we need to make sure the react component is mounted before running the script. Of course, remember to import useEffect from react library.

## Implementation

To add animation to the target div element, 
simply add a data attribute to the target div.

For example,
```sh
<div data-sad="zoom-out-left"></div>
```
- Remember to define the style of the target element before adding data-sad attribute. By default, the element will turn into 0 opacity after the attribute is added.

## Attribute explaination

### data-sad = "<--type-->"

1. data-sad:  an indicator for module to trigger animation.
2. <--type-->: various types of animation 

List of types:

| <--type-->  | description |
| ------------- | ------------- |
| fade-up  |  element goes up and fades in  |
| fade-down  | element goes down and fades in  |
| fade-left  | element goes left and fades in  |
| fade-right  | element goes right and fades in  |
| fade-up-left  | element goes up left and fades in  |
| fade-up-right  | element goes up right and fades in  |
| fade-down-left  | element goes down left and fades in  |
| fade-down-right  | element goes down right and fades in  |
| flip-up  | element flips up and fades in  |
| flip-down  | element flips down and fades in  |
| flip-left  | element flips left and fades in  |
| flip-right  | element flips right and fades in  |
| zoom-in  | element zooms in and fades in  |
| zoom-in-up  | element zooms in and fades in  |
| zoom-in-down  | element zooms in and fades in  |
| zoom-in-left  | element zooms in and fades in  |
| zoom-in-right  | element zooms in and fades in  |
| zoom-out  | element zooms out and fades in  |
| zoom-out-up  | element zooms out and fades in  |
| zoom-out-down  | element zooms out and fades in  |
| zoom-out-left  | element zooms out and fades in  |
| zoom-out-right  | element zooms out and fades in  |