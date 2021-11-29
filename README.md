# professor-duck

main features: 
-duck 'responds' to user explaining a coding problem (rubber ducking)
-user can submit a problem with a code block
-if the problem exists/matches another problem in the database, the user will be told so
-answers to previouly matching problems will be given (or can be viewed)

Layout:
Splash Page: Left right options, Ask the duck || Be the Duck (ask a question/post a problem vs solve a problem)
Main Page: Features the duck and problem form. Option to move over to solutions
Problem Page: List all problems
Solution Form: Showcase problem info on page, form to post a solution

Alternatively
Figure out stack overflow API usage
On problem submission, use regex search to filter out similar problems/solutions, post links

CURRENT ISSUES:
-Cannot post a problem to backend (err: no data, possible scope issue)
-Need to build splash page
-Need to build problem page(if I go that route), and solution form
-Need to implement Stack API in backend (if that option moves forward)

Extra features:
-customize the duck
-easter eggs like clicking the duck or sound effects
-maybe text to speech?