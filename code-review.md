# Grow Snippet

On line 76 in app.js, I have this code block where I am using to rotate the dog's head. It's still in the works but pretty buggy. Any feedback and suggestions would be appreciated! 

if (e.keyCode === 40 && (direction === 20 || direction === -20)) {
        headEl.classList.add('rotate90')
    	headEl.classList.remove('rotate-90', 'rotate180')
} else if (e.keyCode === 38 && (direction === 20 || direction === -20)) {
    	headEl.classList.add('rotate-90')
    	headEl.classList.remove('rotate90', 'rotate180')
} else if (e.keyCode === 37 && (direction === 1 || direction === -1)) {
    	headEl.classList.add('rotate180')
    	headEl.classList.remove('rotate-90', 'rotate90')
} else if (e.keyCode === 39 && (direction === 1 || direction === -1)) {
    	headEl.classList.remove('rotate-90', 'rotate180', 'rotate90')
}

# Glow

I don't have a specific snippet to share. I just would love some feedback of overall code organization and best practices.