# NxShop67 :convenience_store: | [![DeepScan grade](https://deepscan.io/api/teams/16862/projects/22444/branches/662143/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16862&pid=22444&bid=662143)

:lollipop: A React/NextJS application [Revamp mo.&nbsp; :pizza: ..:snail:]

<br />

## :paperclip: Install

:lollipop: Type `npm install`  
:lollipop: Type `npm run dev` // opens in port 3003.  
:lollipop: Node v16.17.0

## :paperclip: Front-end


:lollipop: ReactJS, NextJS, Apollo Client, Styled components



#### <kdb>Frontend</kdb>

<img src="frontend/public/static/stripe-cart.png" alt="shop frontend">

<br />

<img src="frontend/public/static/search2.png" alt="shop frontend">

<br />

<img src="frontend/public/static/stripe-payment.png" alt="shop frontend">


#### Back-end :paperclip: separate
- updated all dependencies.


<br />

#### Login Modal

<img src="frontend/public/static/login-modal.png" alt="login modal">

##### About Modal

1. User not signin, it will appear everytime in products page
  
  - Close it and continue browsing
  - Follow signin/signup link to be redirected and welcome with confetti

2. User signed in, it won't show up at all.


3. A bit of overkill feature since i have already disabled link that lets a user 'add to cart'
  when the user isn't signin, but atm the welcoming confetti that appears on the signin and signup pages after
  you have clicked on the link is too good to let go of.


4. Should find out best way to implement this feature later:

  - Once per session
  - Remove entirely since links are now disabled or 
  - Leave original 'add to cart' links and only show modal when user clicks link 
    and not signed in.

<kbd>**Sl**</kbd>
