## The Golden Rule

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup

1) Three divs/imgs for cups
  -Why? to show the user which cup the ball was hidden under.
  -How? `img.src = './assets/correct-cup.png`

2) Three buttons
  -Why? Tells us which cup has been picked, and WHEN they pick it.
  -How? `myButton.addEventListener('click', () => {})`

3) Three divs for win, loss, total
  -Why? Display the current state to the user
  -How? `winsEl.textContent = winCount`

## Events

- User clicks any of the three cup buttons
  - (reset image of all cups)
  - Set State
    - Increment total attempts
    - Use Math.floor(Math.random()) to decide which cup is correct
    - Compare the correct cup with the cup the user clicked
        -if user clicked the correct cup, increment win
      - (optionally: if the user did NOT click the correct cup, increment loss)
    Update DOM
    - Change image of the correct cup
    - Change numbers in winEl, lossEl, totalEl

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
