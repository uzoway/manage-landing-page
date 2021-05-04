# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Vanilla JavaScript

### What I learned

Taking on this challenge taught me a whole lot in the world of Frontend Development and also helped me improve on my frontend coding skills.
In my course of completing the challenge, I learnt:
 - how to validate a form using vanilla JavaScript
 - how to use JavaScript to create a sliding effect 

Below is a code snippet of how I was able to validate the form before it submits.

```html
<form action="" onsubmit="return validateForm()" id="formbox" autocomplete="off">
          <input type="text" id="inbox" placeholder="Updates in your inbox…">
          <span id="alert"></span>
          <button type="submit" id="submit">Go</button>
</form>
```

```JavaScript
function validateForm() {
    let input = document.getElementById("inbox").value;
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");

    let pattern = /[a-z]@/;

    if(input.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        return true
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        alert.innerHTML = "Please insert a valid email";
        return false
    }
}
```

## Author

- Github - [uzoway](https://github.com/uzoway)
- Frontend Mentor - [@uzoway](https://www.frontendmentor.io/profile/uzoway)
- LinkedIn - [Uzochukwu Victor Okafor](https://www.linkedin.com/in/uzochukwuokafor/)

## Acknowledgments

Like always, my gratitute goes to my amazing guys at [Frontend Mentor](https://www.frontendmentor.io) who are working effortlessly to put this challenges together to help Frontend Developers get practical knowledge while building out these projects.
